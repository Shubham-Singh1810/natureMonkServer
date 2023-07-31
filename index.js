const express = require("express");
const app = express()
const cors = require("cors");
require("dotenv").config();

const user = require("./routes/user.route");
const product = require("./routes/product.route")

// connecting with database
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shubham1810:mKQjrvgOyLBF5vG4@cluster0.5bhod07.mongodb.net/naturemonk?retryWrites=true&w=majority"
).then(()=>{
    console.warn("db connection done")
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT || 3005;


// routes
app.use("/user", user);
app.use("/product", product);
app.listen(PORT, ()=>{
    console.log("app is running at port", PORT)
})