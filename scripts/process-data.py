#!/usr/bin/env python3

# Please see 'google-covid-19-mobility-data-process-v1.ipynb'
# for step by step walk through.

import pandas as pd
import requests
import simplejson as json

with open('./secrets/googleapikey.txt', 'r') as f:
    key = f.read()


def get_lat_long(place_id):
    try:
        API_KEY = key.rstrip("\n")
        url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + \
            str(place_id) + "&key=" + str(API_KEY) + "&fields=geometry"

        response = (requests.get(url).text)
        response_json = json.loads(response)

        if "result" in response_json:
            result = response_json["result"]
            if "geometry" in result:
                geometry = result["geometry"]
                if "location" in geometry:
                    location = geometry["location"]
                    return location["lat"], location["lng"]
                else:
                    return None, None
            else:
                return None, None
        else:
            return None, None

    except Exception as e:
        raise e


def add_rolling_average(df):
    df.loc[:, "retail-average"] = df["retail_and_recreation_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()
    df.loc[:, "grocery-average"] = df["grocery_and_pharmacy_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()
    df.loc[:, "parks-average"] = df["parks_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()
    df.loc[:, "transit-average"] = df["transit_stations_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()
    df.loc[:, "workplace-average"] = df["workplaces_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()
    df.loc[:, "residential-average"] = df["residential_percent_change_from_baseline"].rolling(
        window=7, center=True).mean()

    return df


def create_list_for_json_just_parks(df):
    outputList = []
    listOfPlaceIds = df["place_id"].drop_duplicates().to_list()
    groupByPlaceId = df.groupby("place_id")

    for place_id in listOfPlaceIds:
        thisDf = groupByPlaceId.get_group(place_id)
        myDict = {}
        myDict['place_id'] = place_id
        myDict['country_region'] = thisDf.iloc[0]["country_region"]
        myDict['sub_region_1'] = thisDf.iloc[0]["sub_region_1"]
        myDict['lng'] = thisDf.iloc[0]["lng"]
        myDict["lat"] = thisDf.iloc[0]["lat"]

        myDict["parks"] = thisDf["parks-average"].to_list()

        outputList.append(myDict)

    return outputList


worldSubRegion1Df = pd.read_csv("./source-data/world-sub-region-1.csv")

uniqueSubRegion1PlaceIdDf = worldSubRegion1Df[["place_id"]].drop_duplicates()

uniqueSubRegion1PlaceIdDf.loc[:, "lat"], uniqueSubRegion1PlaceIdDf.loc[:, "lng"] = zip(
    *uniqueSubRegion1PlaceIdDf['place_id'].map(get_lat_long))

worldSubRegion1MergeDf = pd.merge(
    worldSubRegion1Df, uniqueSubRegion1PlaceIdDf, on='place_id', how='outer')

worldSubRegion1AverageDf = worldSubRegion1MergeDf.groupby(
    "place_id").apply(add_rolling_average)

worldSubRegion1AverageRoundedDf = worldSubRegion1AverageDf.round({
    'retail-average': 1,
    'grocery-average': 1,
    'parks-average': 1,
    'transit-average': 1,
    'workplace-average': 1,
    'residential-average': 1
})

worldSubRegion1AverageRoundedDfNotNaN = worldSubRegion1AverageRoundedDf[worldSubRegion1AverageRoundedDf["place_id"].notna(
)]

worldSubRegion1ParksList = create_list_for_json_just_parks(
    worldSubRegion1AverageRoundedDfNotNaN)

with open("./src/data/data-world-sub-region-1-parks.json", "w") as outfile:
    json.dump(worldSubRegion1ParksList, outfile, ignore_nan=True)
