const bcrypt = require("bcrypt");
const User = require("../schemas/User");

const registerUser = async (req, res) => {
  const { email, password, agreementStatus } = req.body;

  //hash the password and store to the db
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new user
  await User.create({
    email,
    password: hashedPassword,
    agreementStatus,
  });

  //send a response
  res.status(201).json({ success: true, message: "User created Successfully" });
};

module.exports = {
  registerUser,
};
