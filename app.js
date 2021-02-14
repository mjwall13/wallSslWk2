var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

http.createServer(function(req,res){

    // var parsed = url.parse(req.url);
    // var filename = path.parse(parsed.pathname);
    // console.log(filename);

    // if(filename.name == ""){
    //     filen = "index";
    // }else{
    //     filen = filename.name;
    // }

    fs.readFile("index.html",function(err,data){
        res.writeHead(200);
        res.end(data);
    })

}).listen("8080")