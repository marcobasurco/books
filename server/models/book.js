var mongoose = require('../config/mongoose');

var bookSchema = new mongoose.Schema({
    title: {Type: String, minlength: 2},    
    publication_year: {type: Date},
});

var Books = mongoose.model('Book', bookSchema);

module.exports = Books;