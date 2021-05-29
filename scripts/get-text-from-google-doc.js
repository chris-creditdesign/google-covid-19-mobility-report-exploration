const fs = require("fs");
const GoogleDocToJSON = require("googledoc-to-json");
const config = require("../secrets/config.json");

const gDocToJSON = new GoogleDocToJSON(config);

const options = {
  fileId: "1bUOAzU8YdduZDnKYiXtSQ4HldDAOmQvk7gZLpUngyU0",
  oAuthTokens: config.oAuthTokens,
};

gDocToJSON.getArchieML(options, (err, aml) => {
  if (err) {
    console.log(err);
  }

  console.log(aml);
  fs.writeFileSync("./src/content/data.json", JSON.stringify(aml), "utf8");
});
