var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StepSchema = new mongoose.Schema({
    title: String,
    number: Number,
    body: String,
    code: String,
    answer: String,
    hint: String
});


module.exports = mongoose.model('Step', StepSchema);



