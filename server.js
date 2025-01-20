const express = require("express");
const app = express()
const mongoose = require("mongoose");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("welcome to my mongoAPI");
});

app.post("/blogpost", (req, res) => {
    res.send("this is a postrequest");
});


mongoose.connect("mongodb+srv://violair:123hej@violasapi.x2zne.mongodb.net/Products-api?retryWrites=true&w=majority&appName=ViolasAPI")
.then(() => {
    console.log("connected to mongo");
    
app.listen(PORT, () => {
    console.log("listeing to 3000");
    });
});

