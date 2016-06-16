// REQUIREMENTS
var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(morgan('dev'));

router.get('/david', function(req, res) {
res.send('david');
})
// 

// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');
