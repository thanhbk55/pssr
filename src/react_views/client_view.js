const React = require('react');
const Header = require('./header');
const Main = require('./main');
const SideLeft = require('./sideLeft');
const SideRight = require('./sideRight');
const Footer = require('./footer');

module.exports = function ClientView() {
  return (
    <>
      <link rel="stylesheet" href="/css/loaded.css"/>
      <Header/>
      <div className="content">
        <Main/>
        <SideLeft/>
        <SideRight/>
      </div>
      <Footer/>
    </>
  )
}