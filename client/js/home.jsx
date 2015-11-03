'use strict';

var React = require('react');
var Players = require('./players');
var SearchBar = require('./searchBar');

var Home = React.createClass({
    
    getInitialState: function () {
        return {
            players: [{
                name: "Julio Jones",
                position: "WR",
                team: "Atlanta Falcons",
                college: "Alabama",
                image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13982.png&w=350&h=254',
                games: [{
                    attempts: 27,
                    completions: 20,
                    interceptions: 0,
                    opposition: "Carolina Panthers",
                    touchdowns: 3,
                    yards: 315
                }],
                totals: {
                    TGTS: 40,
                    REC: 27,
                    YDS: 315,
                    TD: 4
                }
            },
            {
                name: "Brett Favre",
                position: "QB",
                team: "Green Bay Packers",
                college: "Somewhere",
                image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/112.png&w=350&h=254",
                games: [{
                    attempts: 27,
                    completions: 20,
                    interceptions: 0,
                    opposition: "Arizona Cardinals",
                    touchdowns: 3,
                    yards: 315
                }],
                totals: {
                    COMP: 124,
                    ATT: 170,
                    YDS: 1042,
                    TD: 12,
                    INT: 3
                }
            },
            {
                name: "Rob Gronkowski",
                position: "TE",
                team: "New England Patriots",
                college: "Arizona",
                image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13229.png&w=350&h=254",
                games: [{
                    attempts: 27,
                    completions: 20,
                    interceptions: 0,
                    opposition: "Arizona Cardinals",
                    touchdowns: 3,
                    yards: 315
                }],
                totals: {
                    TGTS: 37,
                    REC: 27,
                    YDS: 287,
                    TD: 5
                }
            }]
        }
    },
    
    addPlayer: function (event) {
        console.log(event)
    },
    
    removePlayer: function (position) {
        this.state.players.splice(position, 1);
        this.setState({ players: this.state.players });
    },

    render: function () {
        return (
            <div className="main-view">
                <div className="row cushion-bottom">
                    <SearchBar />
                </div>
                <div className="row">
                    <Players players={this.state.players} add={this.addPlayer} remove={this.removePlayer} />
                </div>
            </div>
        );
    }
});

module.exports = Home;