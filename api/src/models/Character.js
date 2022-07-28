const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },  

    status: {
      type: DataTypes.STRING,
      allowNull: false
    },

    species: {
      type: DataTypes.STRING,
      allowNull: false
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    createdInDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  });
};
