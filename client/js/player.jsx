'use strict';

var React = require('react');
var Profile = require('./profile');

var Player = React.createClass({

    render: function () {

        return (
            <div id='player-panel'>
                <Profile image={this.props.stats.image} />
                <div className="stat-row">
                    <span className="bold">Name: </span>{this.props.stats.name}
                </div>
                <div className="stat-row">
                    <span className="bold">Team: </span>{this.props.stats.team}
                </div>
                <div className="stat-row">
                    <span className="bold">Position: </span>{this.props.stats.position}
                </div>
            </div>
        );
    }
});

module.exports = Player;