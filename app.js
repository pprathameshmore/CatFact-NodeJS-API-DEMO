const express = require("express");
var request = require("request");
const app = express();
var port = 3000;
var api = "https://cat-fact.herokuapp.com/";
var endPoint = "facts";

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //var quotes;
    request(api + endPoint, function (error, response, body) {
        var catFacts = JSON.parse(body);
       // console.log(parsedQuotes);
        res.render("index", { fact: catFacts });
    });
});

app.listen(port, () => {
    console.log("Server running at port " + port);
});