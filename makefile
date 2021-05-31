# Download the complete dataset from Google
source-data/Global_Mobility_Report.csv:
	curl https://www.gstatic.com/covid19/mobility/Global_Mobility_Report.csv \
	> source-data/Global_Mobility_Report.csv

# Print column names
columns:
	csvcut -n source-data/Global_Mobility_Report.csv

# From the world data, get just the rows that contain a value for sub_region_1.
# But not sub_region_2 or metro_area - for a detailed world map
output-data/world.csv: source-data/Global_Mobility_Report.csv
	cat source-data/Global_Mobility_Report.csv | \
	csvgrep -c 4-5 -r '^$$' | \
	csvgrep -c 3 -r '^$$' -i \
	> output-data/world.csv

# Create a CSV with just rows for Great Britain
# I want rows where column one is equal to "GB"
# and column 4 to not be be empty
output-data/england.csv: source-data/Global_Mobility_Report.csv
	csvgrep -c 1 -m "GB" source-data/Global_Mobility_Report.csv | \
	csvgrep -c 4 -r '^$$' -i \
	> output-data/england.csv

