var ghpages = require("gh-pages");

ghpages.publish("docs",
  {
    repo:
      "git@github.com:fireflysemantics/collections.git",
  },
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);