const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const validateRegisterInputs = require("../validations/validateRegisterInputs");

router
  .route("/register")
  .post(validateRegisterInputs, authControllers.registerUser);

module.exports = router;
