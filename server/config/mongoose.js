var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booksRestful', { useNewUrlParser: true });

module.exports = mongoose