const React = require('react');
const Head = require('./head')
const Header = require('./header')
const Main = require('./main')
const SideLeft = require('./sideLeft')
const SideRight = require('./sideRight')
const Footer = require('./footer')

module.exports = class Sample extends React.Component {
  render(){
    return (
      <html>
        <Head/>
        <body>
          <Header/>
          <div className="content">
            <Main/>
            <SideLeft/>
            <SideRight/>
          </div>
          <Footer/>
        </body>
      </html>
    )
  }
}