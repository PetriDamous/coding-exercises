const fs = require("fs");

const editStoryName = (root, args, context) => {
  const rawStories = fs.readFileSync("./stories.json", "utf-8");
  const stories = JSON.parse(rawStories);
  const res = stories.map((story) => {
    if (story.id === args.id) {
      story.name = args.name;
    }
    return story;
  });
  fs.writeFileSync("./stories.json", JSON.stringify(res));
  return res.filter((story) => story.id === args.id)[0];
};

module.exports = {
  editStoryName,
};
