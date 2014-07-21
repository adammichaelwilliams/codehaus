var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var LessonSchema = new mongoose.Schema({
    author: String,
    title: String,
    stepCount: Number,
    steps: [{type: ObjectId, ref: 'Step'}]
});


module.exports = mongoose.model('Lesson', LessonSchema);




