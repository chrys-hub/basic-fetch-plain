const http = require('http');
const fs = require("fs");

var port=8080;
http.createServer(function(req,res){
    fs.readFile('../index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File tidak di temukan');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(port);