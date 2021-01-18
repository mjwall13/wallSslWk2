var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

http.createServer(function(req,res){

    fs.readFile("index",function(err,data){

        var parsed = url.parse(req.url);
        var filename = path.parse(parsed.pathname);

        console.log(filename.name);
        filen = filename.name;

        if(filename.name == ""){
            filen = "index"
        }else{
            filen = filename.name;
        }

        res.writeHead(200);
        res.end(data);
    })

}).listen("8080");