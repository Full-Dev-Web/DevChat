'use strict'
//
let express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http);

app.use(express.static('public'));

http.listen(8080, () =>{
    console.log('Full Dev Web');
});