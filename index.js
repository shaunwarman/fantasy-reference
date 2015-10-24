'use strict';

var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('NODE_DEV');

var express = require('express');
var app = express();

var routes = require('./server/controllers');

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/build'));
app.use('/', routes);

console.log("Listening on port: 3000");
app.listen(process.env.PORT || 3000);