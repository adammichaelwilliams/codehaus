
var Lesson = require('../models/lesson.js');
var Step = require('../models/step.js');


exports.post = function(req, res) {
    console.log(req);

    new Lesson({title: req.body.title, author: req.body.author, stepCount: 0}).save();
    console.log("title: " + req.body.title);
    console.log("author: " + req.body.author);
    res.redirect('/lessons');
};

exports.show = function(req, res) {

    Lesson.findOne({title: req.params.title}).populate('steps').exec( function(err, lesson) {
//        res.send(lesson);
        var querystring = require("querystring");
        var lessonUrlTitle = encodeURIComponent(lesson.title);
        console.log(lesson.title);
        console.log(lesson.steps);
        console.log(lessonUrlTitle);
        res.render('lesson', {
            lesson: lesson,
            lessonUrlTitle: lessonUrlTitle,
            steps: lesson.steps
        });
    });
}


exports.showjson = function(req, res) {

    Lesson.findOne({title: req.params.title}).populate('steps').exec( function(err, lesson) {
//        res.send(lesson);
        var querystring = require("querystring");
        var lessonUrlTitle = encodeURIComponent(lesson.title);
        console.log(lesson.title);
        console.log(lesson.steps);
        console.log(lessonUrlTitle);
        res.send(lesson);
    });
}

exports.list = function(req, res) {

    Lesson.find(function(err, lessons) {
        res.send(lessons);
    });
}
