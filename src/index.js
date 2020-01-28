const express = require('express')
const app = express();
const { Readable } = require("stream");
const renderer = require("./views/renderer");
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.status(200);
  res.type("text/html; charset=utf-8");

  const openHTML = await renderer.openHTML();
  const head = await renderer.head();
  const openBody = await renderer.openBody();

  res.write(openHTML);
  res.write(head);
  res.write(openBody);

  const dataStreams = [
    renderer.header,
    renderer.contentOpen,
    renderer.main,
    renderer.sideLeft,
    renderer.sideRight,
    renderer.contentClose,
    renderer.footer,
    renderer.closeBody,
    renderer.closeHTML
  ];

  const readStream = new Readable({
    async read(size) {
      if (dataStreams.length) {
        const dataStream = dataStreams.shift();
        const dataStreamHTML = await dataStream();
        readStream.push(dataStreamHTML);
      } else {
        readStream.push(null);
      }
    }
  });

  readStream.pipe(res);
})

require('node-jsx').install({harmony: true});
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const React = require('react');
const ReactDOMServer = require("react-dom/server");
const App = require("./react_views/renderer");

app.get('/react', async (req, res) => {
  res.status(200);
  res.type("text/html; charset=utf-8");

  const view = ReactDOMServer.renderToString(React.createElement(App))
  res.send(
    view
  );
})

app.get('/react_stream', async (req, res) => {
  res.status(200);
  res.type("text/html; charset=utf-8");

  ReactDOMServer.renderToNodeStream(
    React.createElement(App)
).pipe(res)
})

app.listen(PORT, () => {
  `Listening on ${ PORT }`
});