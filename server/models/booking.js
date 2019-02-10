'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    startDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    comment:{
        type: DataTypes.TEXT
    },
    approvedByBoatMan:{
      type: DataTypes.BOOLEAN
    }
  });

  Booking.associate = models => {
      Booking.belongsTo(models.Boat,
        {foreignKey: { allowNull: false }})
      Booking.belongsTo(models.User,
        {foreignKey: { allowNull: false }})
  }

  return Booking;
};