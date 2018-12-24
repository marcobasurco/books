var Author = require('../models/author.js'),
    Book = require('../models/book.js');

module.exports = {
    getAuthors: function (req, res){
        Author.find({}, function(err, authors){
            if (err) {
                res.json({ message: "Error collecting data from database: ", error: err });
            } else {
                res.json({ message: "Success", data: authors });
            }
        })
    },
    getAuthorByID: function (req, res){
        Author.findOne({_id: req.params.id}, function(err, authors){
            if (err) {
                res.json({ message: "Error collecting author by ID:", error: err});
            } else {
                res.json({ message: "Success", data: authors });
            }
        })
    },

    deleteAuthorByID: function (req, res) {
        Author.find({_id: req.params.id}, function(err, author){
            if (err) {
                res.json({ message: "Error collecting data:", err});
            } else {
                var booksToDelete = author[0].books;
                for (let book of booksToDelete){
                    console.log(book._id);
                    Book.deleteOne({_id: book._id}, function(err){
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                Author.deleteOne({_id: req.params.id}, function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json({message: "author deleted"})
                    }
                })
            }
        })
    },
    
    createAuthor: function (req, res) {
        var newAuthor = new Author(req.body);
        newAuthor.save(function(err) {
            if (err) {
                res.json({ message: "Error writing to the database: ", err});
            } else {
                res.json({ message: "Success Adding Author"});
            }
        })
    },
    editAuthor: function (req, res) {
        Author.updateOne({_id: req.params.id}, req.body, function(err){
            if (err) {
                res.json({ mesaage: "I could not edit the book in database: ", err });
            } else {
                res.json({ message: "Success Editing Author"});
            }
        })
    }
}


