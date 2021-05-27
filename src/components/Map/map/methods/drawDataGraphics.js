import { colorScale, spikeScale } from "../../../../utils/scales.js";

function buildDataGraphics() {
  let { dataGraphics, projection, props } = this;
  let { data, zoomLevels, currentDay, dataDisplay } = props;

  dataGraphics.clear();

  if (dataDisplay !== "none") {
    let scale = zoomLevels[dataDisplay].scaleY;

    const spikeRadius = 2 / scale;

    data[dataDisplay].forEach((d) => {
      let [x, y] = projection([d.lng, d.lat]);
      let color = colorScale(d.parks[currentDay]);
      let spikeHeight = spikeScale(d.parks[currentDay]);

      dataGraphics.beginFill(color, 0.5);
      dataGraphics.moveTo(x - spikeRadius, y);
      dataGraphics.lineTo(x, y + spikeHeight / scale);
      dataGraphics.lineTo(x + spikeRadius, y);
      dataGraphics.endFill();
    });
  }

  return this;
}

export default buildDataGraphics;
