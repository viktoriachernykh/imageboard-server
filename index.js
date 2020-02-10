const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");
// const router = new Router();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
app.use(imageRouter);

// app.use(router);

const db = require("./db.js");
const Image = require("./image/model.js");

function onListen() {
  console.log(`Example app listening on port ${port}!`);
}

app.get("/", (req, res) => res.send("Buenas Dias! La pagina della casa"));

app.get("/image", (req, res) => res.send("BHey! Image page is here"));

// app.post("/images", async function(request, response, next) {
//   try {
//     const image = await Image.create(request.body);
//     console.log("image", image);
//     response.send(image);
//   } catch (error) {
//     next(error);
//   }
// });

// app.get("/images", async (request, response, next) => {
//   try {
//     const images = await Image.findAll();
//     console.log("images", images);
//     response.send(images);
//   } catch (error) {
//     next(error);
//   }
// });

app.listen(port, onListen);
