async function buildData() {
  const response = await fetch("./data/data-world-sub-region-1-parks.json");

  const json = await response.json();

  return json;
}

export default buildData;
