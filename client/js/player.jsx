'use strict';

var React = require('react');
var Profile = require('./profile/profile');
var PlayerInfo = require('./profile/playerInfo');
var PlayerTotals = require('./profile/playerTotals');

var Player = React.createClass({
    
    handleRemove: function (event) {
        var position = $(event.target).attr('data-index');
        this.props.remove(position);
    },

    render: function () {

        return (
            <div id='player-panel'>
                <span className="glyphicon glyphicon-remove pull-right" data-index={this.props.position} onClick={this.handleRemove}></span>
                <Profile image={this.props.stats.image} />
                <PlayerInfo info={this.props.stats} />
                <PlayerTotals stats={this.props.stats} />
            </div>
        );
    }
});

module.exports = Player;