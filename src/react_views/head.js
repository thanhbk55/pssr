const React = require('react');
module.exports = class Sample extends React.Component {
    render(){
      return (
        <head>
          <style dangerouslySetInnerHTML={{__html:"body{height:100vh;margin:0 100px}.content,footer,header{margin:20px}header{height:10%;background:#ea8e75}.content{height:65%;display:grid;grid-template-columns:repeat(3,1fr);justify-content:center;grid-template-columns:20% 1fr 20%}.content aside{background:#999;height:100%}.content aside.left{grid-column:1/2;grid-row:1}.content aside.right{grid-column:3/4;grid-row:1}.content main{background:#fdc27b;height:100%;margin:0 20px;grid-column:2/3;grid-row:1}footer{height:25%;background:#8dd0e0}"}}>
            
          </style>
        </head>
      )
  }
}

