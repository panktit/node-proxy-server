var express = require("express");
var app = express();

app.get('/app2',function(req,res) {
    res.send("Response from Server 2");
});

app.listen(3002);