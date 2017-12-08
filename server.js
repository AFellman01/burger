var express = require ('express')
// Hello express, my old friend...
var method-override = require ('method-override')
// okay, so, I don't know what this does. I mean, apparently, it's part of express, but it's not part of express? I don't really know how to call it, so I guessed.
var bodyparser = require ('bodyparser')


var port = 3000;

var app = express();


app.use(express.static("public"));
// Have I mentioned that it feels weird the readme didn't say anything about adding a local javascript file? Because it feels weird.

app.use(bodyParser.urlencoded({ extended: false }));
// Like I said in class, I don't need to know how this works, I just need to know how to use it.

app.use(require('express-method-override')
// See? I guessed. Apparently, it needs to happen after the bodyparser, so... yeah.


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// All of this came from cats. And why not? It worked there, it should work here. this is boilerplate.


var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
