const express = require("express");
const app = express();
const cors = require("cors")
require("./db")
const authRoutes = require("./routes/authRoutes")


const PORT = 8000 || process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/auth", authRoutes);


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT!", PORT);
});


