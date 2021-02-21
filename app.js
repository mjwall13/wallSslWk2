const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require('url');

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let ejs = require("ejs")
const router = express.Router();
var app = express();
app.set("view enjine", "ejs");
app.engine("ejs", require("ejs")._express);

router.get("/",function(req,res){
    res.render("index", {pagename: "Home"}); //views/index.ejs
})
router.get("/about",function(req,res){
    res.render("about", {pagename: "About"}); //views/about.ejs
})

router.post("/login", function(req,res){
    var errors = [];
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    if(req.body.email ==""){
        errors.push("Email is required.")
    }
    if(req.body.password ==""){
        errors.push("Password is required.")
    }
    if (regex.test(req.body.email)) {
        res.redirect("/");
    } 

})

app.use(express.static("public"));
app.use("/",router);
var server = app.listen("8080");





// http.createServer(function(req,res){

//     var parsed = req.url;
//     var pathname = parsed.hash;

//     if(pathname = "about"){
//         fs.readFile("contact.html",function(err,data){
//             res.writeHead(200);
//             res.end(data);
//         })
//         }
//     else if(pathname = "contact") {
//         fs.readFile("contact.html",function(err,data){
//             res.writeHead(200);
//             res.end(data);
//         })
    
//     }else{
//         fs.readFile("index.html",function(err,data){
//             res.writeHead(200);
//             res.end(data);
//         })
//     }
// }).listen("8080")