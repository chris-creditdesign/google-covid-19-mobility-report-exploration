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

# Create a CSV with just rows for US
output-data/usa.csv: source-data/Global_Mobility_Report.csv
	csvgrep -c 1 -m US source-data/Global_Mobility_Report.csv \
	> output-data/usa.csv

# Create a CSV with just rows relating to countries in Europe
# Europe ISO list taken from https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVD&TVD=141329
output-data/europe.csv: source-data/Global_Mobility_Report.csv
	cat source-data/Global_Mobility_Report.csv | \
	csvgrep -c 1 -r 'AT$\|BE$\|BG$\|HR$\|CY$\|CZ$\|DK$\|EE$\|FI$\|FR$\|DE$\|GR$\|HU$\|IE$\|IT$\|LV$\|LT$\|LU$\|MT$\|NL$\|PL$\|PT$\|RO$\|SK$\|SI$\|ES$\|SE$\|GB' \
	> output-data/europe.csv

# Create a CSV with just rows for India
output-data/india.csv: source-data/Global_Mobility_Report.csv
	csvgrep -c 1 -m IN source-data/Global_Mobility_Report.csv \
	> output-data/india.csv

# Create a CSV with just rows for London
# I want rows where column three is equal to "Greater London"
# and column 4 to not be be empty
output-data/london.csv: source-data/Global_Mobility_Report.csv
	csvgrep -c 3 -m "Greater London" source-data/Global_Mobility_Report.csv | \
	csvgrep -c 4 -r '^$$' -i \
	> output-data/london.csv

# Europe
output-data/england.csv: source-data/Global_Mobility_Report.csv
	csvgrep -c 1 -m "GB" source-data/Global_Mobility_Report.csv | \
	csvgrep -c 4 -r '^$$' -i \
	> output-data/england.csv

# Download a Shapefile of the London Boroughs and convert to geojson
# Dowrnload file from London Data Store
# Use mapshaper to convert to topojson and reproject to wgs84
output-data/london.json:
	curl -L https://data.london.gov.uk/download/statistical-gis-boundary-files-london/9ba8c833-6370-4b11-abdc-314aa020d5e0/statistical-gis-boundaries-london.zip \
	> source-data/statistical-gis-boundaries-london.zip
	@[ -d source-data/london ] || mkdir source-data/london
	unzip source-data/statistical-gis-boundaries-london.zip -d source-data/london
	mapshaper source-data/london/statistical-gis-boundaries-london/ESRI/London_Borough_Excluding_MHW.shp \
	-proj wgs84 \
	-o output-data/london.json format=topojson
