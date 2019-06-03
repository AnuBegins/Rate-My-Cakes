var path = require("path");
const port = 8000;

/* ---------- Express ---------- */
const express = require('express');
const app = express();
app.set('trust proxy', 1) // trust first proxy

/* ---------- Body Parser ---------- */
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ---------- Static ---------- */
app.use(express.static(__dirname + '/public/dist/public'));

// ---------- Mongoose ----------
require("./server/config/mongoose");

/* ---------- Routing ---------- */
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});