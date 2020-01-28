const React = require('react');
const Dummy = require("./dummy");

module.exports = function Main() {
  return (
    <main>
      <button onClick={() => {alert("aaa")}}>Click</button>
      <Dummy/>
    </main>
  )
}