import * as topojson from "topojson-client";

// let europe = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         name: "Europe",
//       },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [20, 60], // Start top right
//             [20, 36], // bottom right
//             [-14, 36], // bottom left
//             [-14, 60], // top right
//             [20, 60], // return to start
//           ],
//         ],
//       },
//     },
//   ],
// };

// let london = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         name: "London",
//       },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [0.3, 51.7], // Start top right
//             [0.3, 51.2], // bottom right
//             [-0.5, 51.2], // bottom left
//             [-0.5, 51.7], // top left
//             [0.3, 51.7], // return to start
//           ],
//         ],
//       },
//     },
//   ],
// };

let england = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "England",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.2, 56], // Start top right
            [2.8, 49.9], // bottom right
            [-6.3, 49.9], // bottom left
            [-6.3, 56], // top left
            [2.2, 56], // return to start
          ],
        ],
      },
    },
  ],
};

// let london = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         name: "London",
//       },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [-65, 50], // Start top right
//             [-65, 27], // bottom right
//             [-126, 27], // bottom left
//             [-126, 50], // top left
//             [-65, 50], // return to start
//           ],
//         ],
//       },
//     },
//   ],
// };

async function buildLandAreas() {
  const response = await fetch("./data/land-50m.json");

  const world = await response.json();

  const landAreas = {};

  landAreas.world = topojson.feature(world, world.objects.land);
  landAreas.england = england;

  return landAreas;
}

export default buildLandAreas;
