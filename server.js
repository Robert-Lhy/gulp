var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine').types;
var path=require('path');
var express = require('express');

var app = express();
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname , 'src/index.html'))

})
var port = process.argv.slice(2)[0] || 3000

app.listen(port, function() {
  console.log('Server listening on http://localhost:' + port + ', Ctrl+C to stop')
})

