var express = require('express');
var app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + '/public'));

app.get("/", function (req,res){
        res.sendFile(__dirname + '/views/game.html');
});


app.listen(process.env.PORT || 8080, function(){
        console.log("Vroom vroom baby!...");
    });