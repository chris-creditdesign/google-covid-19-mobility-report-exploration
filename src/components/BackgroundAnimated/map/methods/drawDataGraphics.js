import { scaleLinear } from "d3-scale";

const spikeScale = scaleLinear().domain([-100, 100]).range([30, -30]);

const colorScale = (d) => (d > 0 ? 0xff0000 : 0x0000ff);

function buildDataGraphics() {
  let { dataGraphics, projection, props } = this;
  let { data, currentDay } = props;

  const spikeRadius = 2;

  dataGraphics.clear();

  data.forEach((d) => {
    let [x, y] = projection([d.lng, d.lat]);
    let color = colorScale(d.parks[currentDay]);
    let spikeHeight = spikeScale(d.parks[currentDay]);

    dataGraphics.beginFill(color, 0.5);
    dataGraphics.lineStyle(1, color, 1);
    dataGraphics.moveTo(x - spikeRadius, y);
    dataGraphics.lineTo(x, y + spikeHeight);
    dataGraphics.lineTo(x + spikeRadius, y);
    dataGraphics.endFill();
  });

  return this;
}

export default buildDataGraphics;
