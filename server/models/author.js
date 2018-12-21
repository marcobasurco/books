var mongoose = require('../config/mongoose.js'),
    bookSchema = require('./book.js').schema;

var authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    country: { type: String },
    birthdate: { type: Date },
    books: [bookSchema]
})

var Authors = mongoose.model('Author', authorSchema);

module.exports = Authors;