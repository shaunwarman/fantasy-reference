'use strict';

var React = require('react');
var Player = require('./player');

var Players = React.createClass({
    
    handlePlayers: function (players) {
        var playerPanels = [];
        
        if (players) {
            players.forEach(function (element, index) {
                playerPanels.push(<Player stats={element} add={this.props.add} remove={this.props.remove} position={index} key={index+1}/>);
            }.bind(this));
        }
        
        return playerPanels;
    },
    
    render: function () {
        var playerList = this.handlePlayers(this.props.players);
        
        return (
            <div id='players-view'>
                {playerList}
            </div>
        );
    }
});

module.exports = Players;