'use strict';

var React = require('react');
var Profile = require('./profile');
var PlayerInfo = require('./playerInfo');

var Player = React.createClass({

    render: function () {

        return (
            <div id='player-panel'>
                <Profile image={this.props.stats.image} />
                <PlayerInfo info={this.props.stats} />
            </div>
        );
    }
});

module.exports = Player;