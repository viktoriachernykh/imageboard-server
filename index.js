const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");

// const db = require("./db.js");
// const Image = require("./image/model.js");

function onListen() {
  console.log(`Example app listening on port ${port}!`);
}

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(imageRouter);
// app.use(router);

app.get("/", (req, res) => res.send("Buenas Dias! La pagina della casa"));

app.get("/image", (req, res) => res.send("BHey! Image page is here"));

app.listen(port, onListen);
