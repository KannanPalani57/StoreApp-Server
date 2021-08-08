const User = require("../schemas/User");

const registerUser = async (req, res) => {
    const { email, password, agreementStatus } = req.body;
    console.log(email, password, agreementStatus);
    
    await User.create({
        email,
        password,
        agreementStatus,
    })

    res.status(200).json({success: true, message: "User created Successfully"})
}

module.exports = {
    registerUser
}