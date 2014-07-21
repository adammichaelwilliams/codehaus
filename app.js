var request = require('request');
var _ = require('underscore');
var async = require('async');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');

mongoose.connect('mongodb://localhost/lessons');

var app = express();

app.use(require('body-parser')());

app.set('view engine', 'jade');

/*
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
*/

var lessons = require('./routes/lessons.js');
var steps = require('./routes/steps.js');
app.post('/lessons', lessons.post);
app.get('/lessons', lessons.list);
app.get('/lessons/:title', lessons.show);
app.get('/lessons/:title/json', lessons.showjson);
app.post('/lessons/:title/step', steps.post);

app.get('/', function (req,res) {
    res.render('index');
});

app.listen(3000);


