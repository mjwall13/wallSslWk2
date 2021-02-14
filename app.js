const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require('url');

http.createServer(function(req,res){

    var parsed = req.url;
    var pathname = parsed.hash;

    if(pathname === "about"){
        fs.readFile("about.html",function(err,data){
            res.writeHead(200);
            res.end(data);
        })
        }
    else if(pathname === "contact") {
        fs.readFile("contact.html",function(err,data){
            res.writeHead(200);
            res.end(data);
        })
    
    }else{
        fs.readFile("index.html",function(err,data){
            res.writeHead(200);
            res.end(data);
        })
    }
}).listen("8080")