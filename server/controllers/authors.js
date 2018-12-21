var Author = require('../models/author.js');

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
        Author.deleteOne( {_id: req.params.id}, function(err, authors){
            if (err) {
                res.json({ message: "Error when deleting the author by ID: ", error: err});
            } else {
                res.json({ message: "Success", data: authors });
            }
        })
    },
    createAuthor: function (req, res) {
        var newAuthor = new Author(req.body);
        newAuthor.save(function(err) {
            if (err) {
                res.json({ message: "Error writing to the database: ", err});
            }
        })
    },
    editAuthor: function (req, res) {
        Author.update({_id: req.params.id}, req.body, function(err){
            if (err) {
                res.json({ mesaage: "I could not edit the book in database: ", err });
            }
        })
    }
}

