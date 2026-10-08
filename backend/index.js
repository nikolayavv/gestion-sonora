const express = require("express");
const sequelize = require("./db");
const app = express();
const Instrumento = require("./models/instrumento");

app.get("/", (req, res) => {
    res.send("Gestion Sonora");
});


app.get("/instrumentos", async(req, res) => {
    try {
        const instrumentos = await Instrumento.findAll();
        res.json(instrumentos);
    } catch (error) {
        console.error("Hubo un error:", error);
        res.status(500).json({mensaje: "No se pudieron cargar los registros."});
    }
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
