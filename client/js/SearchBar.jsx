'use strict';

var React = require('react');

var SearchBar = React.createClass({
    
    addPlayer: function (event) {
        console.log(event.target);
    },
    
    search: function () {},

    render: function () {

        return (
            <div className="search-bar">
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" id="player-search" placeholder="Search player..."></input>
                        <button type="submit" className="btn btn-primary" id="add-player" onClick={this.addPlayer}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = SearchBar;