const fs = require("fs");

function loadHTML(path) {
  return fs.readFileSync(path);
}

const wait = async function(time=500) {
  await new Promise(resolve => setTimeout(resolve, time));
};


module.exports = {
  openHTML: async () =>
    await loadHTML(__dirname + "/views/1-openHTML.html"),
  head: async () =>
    await loadHTML(__dirname + "/views/2-head.html"),
  openBody: async () =>
    await loadHTML(__dirname + "/views/3-openBody.html"),
  header: async () =>
    await loadHTML(__dirname + "/views/4-header.html"),
  contentOpen: async () =>
    await loadHTML(__dirname + "/views/5-contentOpen.html"),
  sideLeft: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/views/6-sideLeft.html"
    );
  },
  main: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/views/7-main.html"
    );
  },
  sideRight: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/views/8-sideRight.html"
    );
  },
  contentClose: async () =>
    await loadHTML(__dirname + "/views/9-contentClose.html"),
  footer: async () => {
    await wait();
    return await loadHTML(
      __dirname + "/views/10-footer.html"
    );
  },
  closeBody: async () =>
    await loadHTML(__dirname + "/views/11-closeBody.html"),
  closeHTML: async () =>
    await loadHTML(__dirname + "/views/12-closeHTML.html")
};
