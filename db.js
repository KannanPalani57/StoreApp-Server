const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((con) => {
  
    console.log('DB connection successful!')
  });

module.exports = connection;  