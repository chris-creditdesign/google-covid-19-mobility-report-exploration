import { scaleLinear } from "d3-scale";

export const spikeScale = scaleLinear().domain([-100, 100]).range([30, -30]);

export const colorScale = (d) => (d > 0 ? 0xff0000 : 0x0000ff);
