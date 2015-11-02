'use strict';

var React = require('react');

var Player = React.createClass({

    render: function () {
        var imageUrl = 'url(\'' + this.props.stats.image + '\')';
        var imageStyle = {
            width: '84%',
            height: '100px',
            backgroundImage: imageUrl,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '160px 100px',
            margin: '10px auto',
            backgroundColor: '#000000'
        };

        return (
            <div id='player-panel'>
                <div className="profile-image" style={imageStyle}></div>
                <div className="stat-row">
                    Name: {this.props.stats.name}
                </div>
                <div className="stat-row">
                    Team: {this.props.stats.team}
                </div>
                <div className="stat-row">
                    Position: {this.props.stats.position}
                </div>
                <div className="stat-row">
                    College: {this.props.stats.college}
                </div>
            </div>
        );
    }
});

module.exports = Player;