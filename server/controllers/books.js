var Book = require('../models/book.js'),
    Author = require('../models/author.js');

module.exports = {
    createBookWithAuthorID: function(req, res) {
        var newBook = new Book(req.body);
        newBook.save(function (err){
            if (err){
                console.log('Error produced when writing book into the database:' ,err);
            } else {
                Author.updateOne({_id: req.params.id}, {$push: {books: newBook}}, function(err){
                    if (err) {
                        console.log('Error adding book to author', err);
                    } else {
                        console.log('Success adding book to author');
                    }
                })
            }
        })
    },
    deleteBookByID: function(req, res) {
        Book.deleteOne({_id: req.params.id}, function(err){
            if (err) {
                console.log('Error deleting book', err);
            } else {
                console.log('Success deleting the book');
            }
        })
    }
}
