this.express = require('express');  
this.app = this.express();

var http = require('https');  
var fs = require('fs');

var sslPath = '/etc/letsencrypt/live/riegel.selfhost.eu/';

var options = {  
    key: fs.readFileSync(sslPath + 'privkey.pem'),
    cert: fs.readFileSync(sslPath + 'fullchain.pem')
};

this.server = http.createServer(options, this.app);  
this.io = require('socket.io').listen(this.server);  
this.server.listen(443);  