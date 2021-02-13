const { DataTypes } = require("sequelize");
module.exports = (sequelize, dataTypes) => {
    let alias = "notas";
    let cols = {
                    id: {
                        autoIncrement: true,
                        primaryKey: true,
                        type: DataTypes.INTEGER 
                    },
                    titulo: {
                        allowNull: false,
                        type: DataTypes.STRING
                    },
                    texto: {
                        allowNull: false,
                        type: DataTypes.STRING
                    }
                };
    let config = {
        tableName: "notas",
        timestamps: true,  
        underscored: true,
        paranoid: true
    }

    let notas = sequelize.define(alias, cols, config);
    
    return notas;

}