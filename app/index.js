const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5432;

const dbConnection = mysql.createConnection({
  host: "localhost",
  port: 9898,
  user: "root",
  password: "root",
  database: "privateserver",
});

app.use(express.static(__dirname + "/htmls"));

app.get("/", (req, res) => {
  res.sendFile("./htmls/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("Project backend app listening on port " + port);
  dbConnection.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Successfully connected to Database");
  });
});
