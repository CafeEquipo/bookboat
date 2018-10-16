'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mooring = sequelize.define('Mooring', {
    primaryKey:{
        type: DataTypes.INTEGER,
        isUnique:true,
        allowNull:false
    },
    name: {
        type:DataTypes.STRING
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