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

router.get('/all', function (req, res) {
    couchbaseClient.getAll(function (error, result) {
        if (error) {
            res.send({ 'error': error });
            return;
        }
        res.send({ 'players': result });
    });
});

router.post('/user', function (req, res) {
    var data = req.body;
    
    couchbaseClient.upsert(req.body.username, { user: req.body }, function (error, result) {
        if (error) {
            console.log(error);
            res.send('Error adding user!');
            return;
        }
        res.redirect('/home');
    });
});

module.exports = router;