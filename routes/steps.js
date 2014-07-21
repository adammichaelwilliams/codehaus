
var mongoose = require('mongoose');
var Lesson = require('../models/lesson.js');
var Step = require('../models/step.js');


exports.post = function(req, res) {
    console.log(req);

    Lesson.findOne({title: req.params.title}, function(err, lesson) {
        if(!lesson) res.redirect('/error');

        var step = new Step({title: req.body.title
                , number: lesson.stepCount
                , body: req.body.body
                , code: req.body.code
                , answer: req.body.answer
                , hint: req.body.hint});
        step.save();
        //Obviously need to change how this logic works...
        lesson.stepCount += 1;
        lesson.steps.push(mongoose.Types.ObjectId(step._id).toString());
        lesson.save();
        console.log(req);
        res.redirect('/lessons/'+encodeURIComponent(lesson.title));
    });
};


