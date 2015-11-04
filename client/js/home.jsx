'use strict';

var React = require('react');
var Players = require('./players');
var SearchBar = require('./searchBar');

var Home = React.createClass({
    
    getInitialState: function () {
      return {};  
    },
    
    componentDidMount: function () {
        var that = this;
        
        $.get('/all', function (data) {
            that.setState({ players: data.players });
        });
    },
    
    addPlayer: function (event) {
        console.log(event)
    },
    
    removePlayer: function (position) {
        this.state.players.splice(position, 1);
        this.setState({ players: this.state.players });
    },

    render: function () {
        return (
            <div className="main-view">
                <div className="row cushion-bottom">
                    <SearchBar />
                </div>
                <div className="row">
                    <Players players={this.state.players} add={this.addPlayer} remove={this.removePlayer} />
                </div>
            </div>
        );
    }
});

module.exports = Home;