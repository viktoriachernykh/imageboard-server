const { Router } = require("express");
const Image = require("./model");
const router = new Router();

router.post("/images", async function(request, response, next) {
  try {
    const image = await Image.create(request.body);
    console.log("image", image);
    response.send(image);
  } catch (error) {
    next(error);
  }
});

router.get("/images", async (request, response, next) => {
  try {
    const images = await Image.findAll();
    console.log("images", images);
    response.send(images);
  } catch (error) {
    next(error);
  }
});

// router.get("/images", (req, res, next) => {
//   Image.findAll()
//     .then(images => res.send(images))
//     .catch(err => {
//       next(err);
//     });
// });

// router.post("/images", (req, res) => {
//   Image.create(req.body)
//     .then(image => res.send(image))
//     .catch(err => {
//       next(err);
//     });
// });
module.exports = router;
