const { getIntrospectionQuery } = require("graphql");
const fetch = require("node-fetch");
const fs = require("fs");

async function getSchema() {
  try {
    const response = await fetch("https://nws8z.sse.codesandbox.io/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: `${getIntrospectionQuery()}` }),
    });
    const result = await response.json();
    console.log(result);
    fs.writeFileSync("./introspection-query.json", JSON.stringify(result));
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
}

getSchema();
