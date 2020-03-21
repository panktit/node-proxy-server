var express = require("express");
var app = express();

app.get('/app1',function(req,res) {
    res.send("Response from Server 1");
});

app.listen(3001);