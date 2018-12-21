var Authors = require('../controllers/authors'),
    Books = require('../controllers/books');

module.exports = function (app){
    app.get('/api/v1/authors', function(req, res){
        Authors.getAuthors(req, res);
    });

    app.get('/api/v1/authors/:id', function(req, res){
        Authors.getAuthorByID(req, res);
    })

    app.post('/api/v1/authors', function(req, res){
        Authors.createAuthor(req, res);
    })

    app.post('/api/v1/authors/:id', function(req, res){
        Books.createBookWithAuthorID(req, res);
    })

    app.delete('/api/v1/books/:id', function(req, res){
        Books.deleteBookByID(req, res);
    })

    app.delete('/api/v1/authors/:id', function(req, res){
        Authors.deleteAuthorByID(req, res);
    })
}
