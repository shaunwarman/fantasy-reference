'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello World, client here!</div>;
    }
});

module.exports = HelloWorld;