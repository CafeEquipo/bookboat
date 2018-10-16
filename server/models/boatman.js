'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boatman = sequelize.define('Boatman', {
    emailaddress   : {
      type    : DataTypes.STRING,
      isUnique :true,
      allowNull:false,
      validate:{
          isEmail : true
      },
      references:{
        model: User,
        key:'emailaddress',
        deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    phone: {
        type : DataTypes.STRING,
        allowNull: false
    }
  });
  return Boatman;
};