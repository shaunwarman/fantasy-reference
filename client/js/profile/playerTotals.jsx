'use strict';

var React = require('react');

var PlayerTotals = React.createClass({
    
    createTitles: function (titles) {
        var headings = [];
        
        titles.forEach(function (title) {
            headings.push(<th>{title}</th>);
        });
        
        return headings;
    },

    handleTotals: function (stats) {
        var playerStats = [];

        Object.keys(stats).forEach(function (stat) {
            playerStats.push(<td>{stats[stat]}</td>);
        });

        return playerStats;
    },

    render: function () {
        var positionMap = {
            RB: ['ATT', 'YDS', 'TD', 'REC', 'YDS', 'TD'],
            TE: ['TGTS', 'REC', 'YDS', 'TD'],
            WR: ['TGTS', 'REC', 'YDS', 'TD'],
            QB: ['COMP', 'ATT', 'YDS', 'TD', 'INT']
        };

        var titles = this.createTitles(positionMap[this.props.stats.position]);
        var stats = this.handleTotals(this.props.stats.totals);

        return (
            <div className="player-totals">
                <div className="stat-row">
                    <span className="bold">Totals:</span>
                </div>
                <div className="stat-row">
                    <table>
                        <thead>
                            <tr>
                                {titles}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {stats}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = PlayerTotals;