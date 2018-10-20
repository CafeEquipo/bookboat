'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mooring = sequelize.define("Mooring", {
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    streetAdress: {
        type: DataTypes.STRING,
    },
    latitude:{
        type: DataTypes.FLOAT
    },
    longitude:{
        type:DataTypes.FLOAT
    }
  });
  return Mooring;
};