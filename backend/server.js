const express = require("express");
const { port, connection } = require("./conf.js");
const cors = require('cors');

const app = express();

app.use(cors())


app.get("/", (req, res) => {
  connection.query("SELECT * FROM Img", (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.get("/selection/men", (req, res) => {
  connection.query("SELECT * FROM Img where cat = 'Homme'", (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.get("/selection/women", (req, res) => {
  connection.query("SELECT * FROM Img where cat = 'Femme'", (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.get("/selection/sexymen", (req, res) => {
  connection.query("SELECT * FROM Img where cat = 'homme sexy'", (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.get("/selection/sexywomen", (req, res) => {
  connection.query("SELECT * FROM Img where cat = 'Femme Sexy'", (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
