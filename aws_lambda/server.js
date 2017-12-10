var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.get("/hello", function(res, res) {
    // return ;
    res.send("Hello Express");
});

app.listen(3000);
console.log("Server is running on port 3000");