const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Gestion Sonora");
});

app.listen(3000, ()  => {
    console.log("Servidor aca!");
});

