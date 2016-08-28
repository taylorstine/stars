'use strict'
var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', path.resolve('./views'));
app.use(express.static(path.resolve('./public')));

app.get('/', function(req, res, next){
  res.render('root')
});

const port = 3000;
app.listen(port, ()=>console.log('listening on port ' +port));
