const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require('url');

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const session = require("express-session");
app.use(session({secret:"secret", saveUninitialized:true,resave:true}));
var sess;

const ejs = require("ejs")
const router = express.Router();
var app = express();
app.set("view enjine", "ejs");
app.engine("ejs", require("ejs")._express);

router.get("/",function(req,res){
    sess = req.session;  //start sessions
    res.render("index", {pagename: "Home"}); //views/index.ejs
})
router.get("/about",function(req,res){
    sess = req.session;  //start sessions
    res.render("about", {pagename: "About"}); //views/about.ejs
})

router.get("/profile", function(req,res){
    sess = req.session;  //start sessions
    if(typeof(sess)=="undefined" || sess.loggedin !=true ){
        var errors = ["Not a authenticated user"];
        res.render("index", {pagename: "Home",errors:errors})
    } else{
        res.render("profile", {pagename: "Profile",sess:sess})
    }
});

router.get("/logout", function(req,res){
    sess=req.session;
    sess.destroy(function(err){
        res.redirect("/");
    })
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
        errors.push("Valid email required.")
    } 

    //write your conditional here if matching username and password HOMEWORK

    sess = req.session;
    sess.loggedin = true;
    res.render('profile', {pagename: "Profile",sess:sess});

})

app.use(express.static("public"));
app.use("/",router);
var server = app.listen("8080");