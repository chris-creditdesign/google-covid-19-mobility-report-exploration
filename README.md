# Google Covid-19 Mobility Report Exploration

A project seeking to explore and visualise the [Google Covid-19 Mobility Report data](https://www.google.com/covid19/mobility/).

Published at: [https://romantic-saha-e522d8.netlify.app](https://romantic-saha-e522d8.netlify.app)

## Data expolation

Expoloritory analysis of the dataset can be viewed in this [Observable notebook](https://observablehq.com/@chris-creditdesign/google-mobility-data-exploration) and [Juyter notebook](google-covid-19-mobility-data-process-v1.ipynb).

## To download and process the data

To download the raw data from Google (be warned, this is a 530mb file):

    make source-data/Global_Mobility_Report.csv

To filter the data to just contain rows that pertain to `sub_region_1` areas for the world and `sub_region_2` for Great Britain:

    make output-data/world.csv
    make output-data/england.csv

To process the data, in order to:

- Extract just the points for "retail_and_recreation_percent_change_from_baseline"
- Calculate a seven day rolling average
- Add lat long coordinates for each `place_id` using the Google Maps API
- Reconfigure as save the data as json file for visualisation.

Please run these Jupyter notebooks:

- [google-covid-19-mobility-data-process-world.ipynb](google-covid-19-mobility-data-process-world.ipynb)
- [google-covid-19-mobility-data-process-england.ipynb](google-covid-19-mobility-data-process-england.ipynb)

## To build the visualisation

Install the dependencies...

    npm install

...then start [Rollup](https://rollupjs.org) and serve with [sirv-cli](https://github.com/lukeed/sirv):

    npm run dev

Navigate to [localhost:5000](http://localhost:5000).

## Build a SSR version of the page

To render the compiled client side javascript as `public/build/bundle.js`

    npm run build

To render a bundled version of the svelte app, which can be run in a node environment to create a SSR version of the app run:

    npm run build:ssr-js

To call `render-static-html.js` to create a static rendering of the html as `public/index.html`:

    npm run build:ssr-html

To run all these processes together:

    npm run ssr

## Get text from Google Doc

The text for this visualisation is derrived from this [Google Doc](https://docs.google.com/document/d/1bUOAzU8YdduZDnKYiXtSQ4HldDAOmQvk7gZLpUngyU0/edit).

To download the latest version of the text and save it as `src/content/data.json` for use by `src/App.svelte` run:

    npm run build:ssr-text

Uses [googledoc-to-json](https://github.com/bradoyler/googledoc-to-json) to download text from the google doc in the ArchieML format and convert this to json.

Use [google-tokens](https://github.com/bradoyler/google-tokens) to create API credentials.

Note: The `refresh_token` may be invalidated by google after a period of time. Run `google-tokens` again to get new value.
