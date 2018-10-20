'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boatman = sequelize.define("Boatman", {
    phone: {
        type : DataTypes.STRING,
        allowNull: false
    }
  });

  Boatman.associate = models => {
    Boatman.belongsTo(models.User,
      {foreignKey: { allowNull: false }})
  }

  return Boatman;
};