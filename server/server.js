var express = require('express');
var http = require('http');

var server = express()
	.use(express.compress())
	.use(express.static('./client/'));

http
    .createServer(server)
    .listen(8080);