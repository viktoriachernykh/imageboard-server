const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const router = new Router();

router.post("/user", async function(request, response, next) {
  try {
    const user = {
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 10)
    };
    const newUser = await User.create(user);
    response.send(newUser);
  } catch (error) {
    next(error);
  }
});

// CREATE USER
// http :4000/user email=USER@gmail password=USER

module.exports = router;
