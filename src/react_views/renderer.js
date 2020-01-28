const React = require('react');
const Head = require('./head')
const Header = require('./header')
const Main = require('./main')
const SideLeft = require('./sideLeft')
const SideRight = require('./sideRight')
const Footer = require('./footer')

module.exports = function Renderer() {
  return (
    <html>
      <Head/>
      <body id="root">
        <Header/>
        <div className="content">
          <Main/>
          <SideLeft/>
          <SideRight/>
        </div>
        <Footer/>
        <script src="/js/app.js"></script>
      </body>
    </html>
  )
}