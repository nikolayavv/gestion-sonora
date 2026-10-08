const {DataTypes} = require("sequelize");
const sequelize = require("../db");

const Instrumento = sequelize.define("Instrumento", {
    id_INSTRUMENTO: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    nombre_INSTRUMENTO: {type: DataTypes.STRING(20), allowNull: false}, 
    tipo_INSTRUMENTO: {type: DataTypes.STRING(15), allowNull: false}    
}, {
    tableName: "INSTRUMENTO",
    timestamps: false
});

module.exports = Instrumento;