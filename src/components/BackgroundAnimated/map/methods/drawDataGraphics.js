import { scaleLinear } from "d3-scale";

const spikeScale = scaleLinear().domain([-100, 100]).range([30, -30]);

function buildDataGraphics() {
  let { dataGraphics, projection, props } = this;
  let { data } = props;

  const spikeRadius = 2;

  dataGraphics.clear();

  data.forEach((d) => {
    dataGraphics.beginFill(0xff3300, 0.5);
    dataGraphics.lineStyle(1, 0xff3300, 1);
    let [x, y] = projection([d.lng, d.lat]);

    dataGraphics.moveTo(x - spikeRadius, y);
    dataGraphics.lineTo(x, y + spikeScale(d.parks[4]));
    dataGraphics.lineTo(x + spikeRadius, y);
    dataGraphics.endFill();
  });

  return this;
}

export default buildDataGraphics;
