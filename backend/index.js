const express = require("express");
const sequelize = require("./db");
const app = express();

app.get("/", (req, res) => {
    res.send("Gestion Sonora");
});

async function testConn() {
    try {
        await sequelize.authenticate();
        console.log("conexion comprobada");
        app.listen(3000, ()  => {
            console.log("Servidor aca!");
        });

    } catch (error) {
        console.log("Hubo un error: ", error.message);
    }
}

testConn();