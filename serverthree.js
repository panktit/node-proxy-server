var express = require("express");
var app = express();

app.get('/app3',function(req,res) {
    res.send("Response from Server 3");
});

app.listen(3003);