const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Countries", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      foreingKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      foreingKey: true,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  });
};
