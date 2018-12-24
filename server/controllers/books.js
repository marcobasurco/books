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
                        res.json({message: 'Error adding book to author', err});
                    } else {
                        res.json({message: 'Success adding book to author'});
                    }
                })
            }
        })
    },

    deleteSingleBook: function (req, res) {
        Book.deleteOne({_id: req.params.id}, function(err) {
            if (err) {
                res.json({ message: 'Error deleting book', err });
            } else {
                res.json({ message: "Successfully deleted book" });
            }            
        });
    },

    deleteBookByID: function(req, res) {
        Book.deleteOne({_id: req.params.bid}, function(err){
            if (err) {
                res.json({message: 'Error deleting book', err});
            } else {
                Author.update({_id: req.params.aid}, {$pull: {books: {_id: req.params.bid}}}, function(err) {
                    if (err) {
                        res.json({ message: 'Error deleting book', err });
                    } else {
                        res.json({ message: "Successfully deleted book from db and author "});
                    }
                })
            }
        })
    },

    getAllBooks: function(req, res) {
        Book.find({}, function(error, books) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    books: books
                };
                res.json(response);
            };
        });
    }
}
