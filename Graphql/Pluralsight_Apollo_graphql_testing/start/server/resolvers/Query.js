const fs = require("fs");

const stories = (root, args, context) => {
  const results = fs.readFileSync("./stories.json", "utf-8");
  return JSON.parse(results);
};

module.exports = {
  stories,
};
