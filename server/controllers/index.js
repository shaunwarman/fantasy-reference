'use strict';

var express = require('express'),
    router = express.Router();

var couchbaseClient = require('../lib/couchbaseClient');

router.get('/', function (req, res) {
    res.render('master');
});

router.get('/home', function (req, res) {
    res.render('master');
});

router.post('/user', function (req, res) {
    var data = req.body;
    
    couchbaseClient.upsert(req.body.username, { user: req.body }, function (error, result) {
        if (error) {
            res.send('Error adding user!');
            return;
        }
        res.redirect('/home');
    });
});

module.exports = router;