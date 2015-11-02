'use strict';

var React = require('react');

var PlayerInfo = React.createClass({

    render: function () {

        return (
            <div className="profile-info">
                <div className="stat-row">
                    <span className="bold">Name: </span>{this.props.info.name}
                </div>
                <div className="stat-row">
                    <span className="bold">Team: </span>{this.props.info.team}
                </div>
                <div className="stat-row">
                    <span className="bold">Position: </span>{this.props.info.position}
                </div>
            </div>
        );
    }
});

module.exports = PlayerInfo;