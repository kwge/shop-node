// Node.js notation for importing packages
var express = require('express');
var serveStatic = require('serve-static');

// Spin up a server
var app = express();


// Serve static files from the main directory
app.use(express.static(__dirname + '/build/es6-unbundled'));


//  ____________________________________
// |                                    |
// |       Setting up Page Routes       |
// |____________________________________|
//

app.get('*', function(req, res){
  res.sendFile('index.html', {root: '.'});
});

// // app.get('*', serveStatic('src'));
// app.use('*', express.static(__dirname + '/src'));

// Tell the app to listen for requests on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
