const fs = require("fs");

function loadHTML(path) {
  return fs.readFileSync(path);
}

const wait = async function(time=500) {
  await new Promise(resolve => setTimeout(resolve, time));
};


module.exports = {
  openHTML: async () =>
    await loadHTML(__dirname + "/1-openHTML.html"),
  head: async () =>
    await loadHTML(__dirname + "/2-head.html"),
  openBody: async () =>
    await loadHTML(__dirname + "/3-openBody.html"),
  header: async () =>
    await loadHTML(__dirname + "/4-header.html"),
  contentOpen: async () =>
    await loadHTML(__dirname + "/5-contentOpen.html"),
  sideLeft: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/6-sideLeft.html"
    );
  },
  main: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/7-main.html"
    );
  },
  sideRight: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/8-sideRight.html"
    );
  },
  contentClose: async () =>
    await loadHTML(__dirname + "/9-contentClose.html"),
  footer: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/10-footer.html"
    );
  },
  closeBody: async () =>
    await loadHTML(__dirname + "/11-closeBody.html"),
  closeHTML: async () =>
    await loadHTML(__dirname + "/12-closeHTML.html")
};
