'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    boat_id_fk:{
        type: DataTypes.INTEGER,
        references: {
            model: Boat,
            key:'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    user_email_fk:{
        type: DataTypes.STRING,
        references: {
            model: User,
            key:'emailaddress',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    comment:{
        type: DataType.TEXT
    }
  });
  return Booking;
};