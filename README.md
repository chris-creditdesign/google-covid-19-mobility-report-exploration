# Google Covid-19 Mobility Report Exploration

A project seeking to explore and visualise the [Google Covid-19 Mobility Report data](https://www.google.com/covid19/mobility/).

## To download and process the data

To download the raw data from Google. Be warned, this is a 530mb file:

	make source-data/Global_Mobility_Report.csv

To filter the data to just contain rows that pertain to `sub_region_1` areas. ie. Smaller than countries but less granular that `sub_region_2` or `metro_area` points.

	make source-data/world-sub-region-1.csv

To process the data, in order to:

- Extract just the points for "retail_and_recreation_percent_change_from_baseline"
- Add lat long coordinates for each `place_id` using the Google Maps API
- Reconfigure as save the data as json file for visualisation. With each location saved as an object within an array.

Each data point will look like:

```
{
  place_id: "ChIJGczaTT5mXj4RBNmakTvGr4s"
  country_region: "United Arab Emirates"
  sub_region_1: "Abu Dhabi"
  lng: 53.7369154
  lat: 23.4677235
  parks: [0, 10, 100, ...]
}
```

	python3 scripts/process-data.py


