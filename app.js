var fs = require("fs");
var http = require("http");

http.createServer(function(req,res){

    fs.readFile("file.html",function(err,data){

        res.writeHead(200);
        res.end(data);
    })

}).listen("8080");