const express = require("express");
const sequelize = require("./db");
const app = express();
const Instrumento = require("./models/instrumento");

app.get("/", (req, res) => {
    res.send("Gestion Sonora");
});

async function iniciarServidor() {
    try {
        await sequelize.authenticate();
        console.log("conexion comprobada");
        app.listen(3000, ()  => {
            console.log("Servidor aca!");
        });


    } catch (error) {
        console.error("Hubo un error: ", error.message);
    }
}

iniciarServidor();