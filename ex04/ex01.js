var http = require('http');

var port = 9090;
var server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hello World');
});

server.listen(port, function(){
    console.log("server: starts...[" + port + "]");
});