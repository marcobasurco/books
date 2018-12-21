var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log('listening on port 8000');
})


