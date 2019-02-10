'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define("Boat", {
    name: {
        type:DataTypes.STRING
    }
  });
  Boat.associate = models => {
    Boat.belongsTo(models.Boatman,
      {foreignKey: { allowNull: false }})
    Boat.belongsTo(models.Mooring,
      {foreignKey: { allowNull: false }})
  }
 
  return Boat;
};