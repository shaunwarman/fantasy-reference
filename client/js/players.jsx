'use strict';

var React = require('react');
var Player = require('./Player');

var Players = React.createClass({
    
    handlePlayers: function (players) {
        var playerPanels = [];
        
        players.forEach(function (element, index) {
            playerPanels.push(<Player stats={element} key={index+1} />);
        });
        
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