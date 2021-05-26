async function buildData() {
  const responseWorld = await fetch("./data/world-parks.json");
  const responseEurope = await fetch("./data/europe-parks.json");
  const responseUsa = await fetch("./data/usa-parks.json");

  const world = await responseWorld.json();
  const europe = await responseEurope.json();
  const usa = await responseUsa.json();

  return { world, europe, usa };
}

export default buildData;
