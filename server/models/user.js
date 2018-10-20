'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    emailaddress   : {
      type    : DataTypes.STRING,
      isUnique :true,
      allowNull:false,
      validate:{
          isEmail : true
      }
    },
    familyname: {
        type : DataTypes.STRING,
        allowNull: false
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    }
  });
  return User;
};