module.exports = function (sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: dataTypes.STRING(500),
            NotNull: true
        },
        texto: {
            type: dataTypes.STRING(1000),
            NotNull: true
        }

    }

    let config = {
        tableName: "notas",
        timestamps: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Nota = sequelize.define(alias, cols, config)
    return Nota;
}