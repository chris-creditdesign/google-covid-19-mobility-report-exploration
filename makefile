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