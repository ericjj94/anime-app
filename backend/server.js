var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// setup database
const mongoConnection = require("./database/database");
const db = mongoConnection.connect();
db.once("open", () => {
  console.log("Database is connected");
});

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require all routes
require("./routes/index.js")(app);

var server = app.listen(8080, function () {
  console.log("Listening on port %s...", server.address().port);
});
