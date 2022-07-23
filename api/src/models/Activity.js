const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreingKey: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    difficulty: {
        type: DataTypes.ENUM(['1','2','3','4','5']),
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    season: {
        type: DataTypes.ENUM(['summer', 'autumn', 'winter', 'spring']),
        allowNull: true,
    },
    createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }

  })
}

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

