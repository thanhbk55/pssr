const React = require('react');
const Dummy = require("./dummy")
module.exports = class Sample extends React.Component {
  render(){
    return (
      <aside className="left">
        <Dummy/>
      </aside>
    )
  }
}