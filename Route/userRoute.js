const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.get("/signin", userController.login);
router.get("/signup", userController.register);


module.exports = router;