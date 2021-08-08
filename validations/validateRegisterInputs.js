const validator = require("validator");
const isEmpty = require("is-empty");

module.exports =  (req, res, next) => {
    const data = req.body;
    console.log(data)
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.agreementStatus = !isEmpty(data.agreementStatus) ? data.agreementStatus: "";
    
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required"
    }else if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }

    if(validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }
    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = "Password must be at least 6 characters"
    }
    if(data.agreementStatus !== false && data.agreementStatus !== true){
        errors.agreementStatus = "You should Agree the conditions and terms to register your account"
    }

    if(!isEmpty(errors)){
       return  res.status(400).json({success: false, errors})
    }

    return next()
}