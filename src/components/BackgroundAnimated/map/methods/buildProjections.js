import { geoEquirectangular, geoPath } from "d3-geo";

function buildProjections() {
  let { props } = this;
  let { width, height, landAreas } = props;
  let { world } = landAreas;

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
