'use strict';

var React = require('react');
var Profile = require('./profile/profile');
var PlayerInfo = require('./profile/playerInfo');
var PlayerTotals = require('./profile/playerTotals');

var Player = React.createClass({

    render: function () {

        return (
            <div id='player-panel'>
                <Profile image={this.props.stats.image} />
                <PlayerInfo info={this.props.stats} />
                <PlayerTotals stats={this.props.stats} />
            </div>
        );
    }
});

module.exports = Player;