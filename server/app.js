var express = require('express'),
    path = require('path'),
    stitch = require('stitch');
// To "stitch" the client-side modules together
// we create a package
var package = stitch.createPackage({
    paths: [__dirname + '/../app'],
    dependencies: [
        __dirname + '/../node_modules/jquery/dist/jquery.min.js',
        __dirname + '/../node_modules/underscore/underscore-min.js',
        __dirname + '/../node_modules/backbone/backbone-min.js',
    ]
});
var app = express();
app.use(express.static(__dirname + '/public'));
// Whenever a request goes to the client, we deliver the modules as client.js
app.get('/static/bundle.js', package.createServer());
app.get('/', function (req, res) {
    console.log("--> /");
    var html = path.resolve(__dirname + '/../index.html');
    res.sendfile(html);
});
app.listen(5000);
console.log("Server is running.");
