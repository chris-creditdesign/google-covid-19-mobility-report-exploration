import * as topojson from "topojson-client";

let europe = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Europe",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [20, 60], // Start top right
            [20, 36], // bottom right
            [-14, 36], // bottom left
            [-14, 60], // top right
            [20, 60], // return to start
          ],
        ],
      },
    },
  ],
};

let usa = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "USA",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-65, 50], // Start top right
            [-65, 27], // bottom right
            [-126, 27], // bottom left
            [-126, 50], // top left
            [-65, 50], // return to start
          ],
        ],
      },
    },
  ],
};

async function buildLandAreas() {
  const response = await fetch("./data/land-50m.json");

  const world = await response.json();

  const landAreas = {};

  landAreas.world = topojson.feature(world, world.objects.land);
  landAreas.usa = usa;
  landAreas.europe = europe;

  return landAreas;
}

export default buildLandAreas;
