# Google Covid-19 Mobility Report Exploration

A project seeking to explore and visualise the [Google Covid-19 Mobility Report data](https://www.google.com/covid19/mobility/).

## Data expolation

    Observable notebook

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

## To build the visualisation

Install the dependencies...

    npm install

...then start [Rollup](https://rollupjs.org) and serve with [sirv-cli](https://github.com/lukeed/sirv):

    npm run dev

Navigate to [localhost:5000](http://localhost:5000).

## Build a SSR version of the page

To render the compiled client side js as `public/build/bundle.js`

    npm run build

To render a bundled version of the svelte app, which can be run in a node environment to create a SSR version of the app run:

    npm run build:ssr-js

To call `render-static-html.js` to create a static rendering of the html, containing the javascript and the css, as `public/index.html`:

    npm run build:ssr-html

To run all these processes together:

    npm run ssr

## Get data from Google Docs

Uses [googledoc-to-json](https://github.com/bradoyler/googledoc-to-json) to download text from a google doc in a ArchieML format and convert this to json.

Credentials are stored in `secrets/config.json`.

Use [google-tokens](https://github.com/bradoyler/google-tokens) to create these details.

Note: The `refresh_token` may be invalidated by google after a period of time. Run `google-tokens` again to get new value.
