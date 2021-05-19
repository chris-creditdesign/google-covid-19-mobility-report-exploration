# Download the complete dataset from Google
source-data/Global_Mobility_Report.csv:
	curl https://www.gstatic.com/covid19/mobility/Global_Mobility_Report.csv \
	> source-data/Global_Mobility_Report.csv

# Print column names
columns:
	csvcut -n source-data/Global_Mobility_Report.csv

# From the world data, get just the rows that contain a value for - for a more granular world map.
# From the world data, get just the rows that contain a value for country_region and sub_region_1.
# But not sub_region_2 or metro_area
source-data/world-sub-region-1.csv: source-data/Global_Mobility_Report.csv
	cat source-data/Global_Mobility_Report.csv | \
	csvgrep -c 4-5 -r '^$$' | \
	csvgrep -c 3 -r '^$$' -i \
	> source-data/world-sub-region-1.csv


