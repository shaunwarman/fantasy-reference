'use strict';

var React = require('react');

var Profile = React.createClass({

    render: function () {
        var imageUrl = 'url(\'' + this.props.image + '\')';
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
            <div className="profile-image" style={imageStyle}></div>
        );
    }
});

module.exports = Profile;