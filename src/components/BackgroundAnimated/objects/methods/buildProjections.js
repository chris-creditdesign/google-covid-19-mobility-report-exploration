import { geoEquirectangular, geoPath } from "d3-geo";

function buildProjections() {
  let { props, landAreas } = this;
  let { world } = landAreas;
  let { width, height } = props;

  this.projection = geoEquirectangular().fitExtent(
    [
      [0, 0],
      [width, height],
    ],
    world
  );

  this.landPath = geoPath().projection(this.projection);

  return this;
}

export default buildProjections;
