'use strict';

var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('NODE_DEV');
var ViewQuery = couchbase.ViewQuery;
var _ = require('underscore');

var cbClient = {};

cbClient.get = function (document, entity, callback) {
    bucket.get(document, entity, callback);
};

cbClient.upsert = function (document, entity, callback) {
    bucket.upsert(document, entity, callback);
};


cbClient.getAll = function (callback) {
    var q = ViewQuery.from('getAll', 'getAll')
        .limit(5);
    
    bucket.query(q, function (err, values) {
        if (err) {
            callback(err, null);
        }
        
        var keys = _.pluck(values, 'id');
        bucket.getMulti(keys, function (err, results) {
            if (err) {
                callback(err, null);
            }

            // Add the id to the document before sending to template
            var players = _.map(results, function (v, k) {
                v.value.id = k;
                return v.value;
            });

            callback(null, players);
        })
    });
};

module.exports = cbClient;