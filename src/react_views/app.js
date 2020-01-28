
const React = require('react');
const ReactDOM = require('react-dom');
const ClientView = require('./client_view');

ReactDOM.hydrate(<ClientView />, document.getElementById('root'));