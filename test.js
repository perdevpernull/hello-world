var express = require("express");

// - -- --->

var app = express();
var listeningPort = 3000;

app.get("/:username/:dbname", function (req, res) {
    res.send(`user:${req.params.username}, db:${req.params.dbname}`);
    res.end();
});

app.use(express.static("./public"));

app.listen(listeningPort);

console.log(`MyInfo-Server started on listeningPort ${listeningPort}!ll`);
