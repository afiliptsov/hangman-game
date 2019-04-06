require("dotenv").config();
const path = require("path");
const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const axios = require("axios");
const morgan = require("morgan");

const { startGame } = require(`${__dirname}/controllers/gameCtrl`);

const port = process.env.port || 3033;

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(json());
app.use(urlencoded({ extend: true }));
app.use(morgan("dev"));
app.use(cors());

//Massive is ORM Object Relational Mapper. Wrapper over database instance which gives tools to interact with it.
// massive(process.env.CONNECTION_STRING)
//   .then(db => app.set("db", db))
//   .catch(console.log);

// Initial game logic on Server Side.
app.post("/api/game", startGame);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
