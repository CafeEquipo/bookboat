'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define('Boat', {
    id:{
        type: DataTypes.INTEGER,
        isUnique:true,
        allowNull:false
    },
    name: {
        type:DataTypes.STRING
    },
    boatman_fk:{
        type:DataTypes.STRING,
        references: {
            model: Boatman,
            key:'emailaddress',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    mooring_fk:{
        type: DataTypes.INTEGER,
        references:{
            model: Mooring,
            key:'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    }
  });

  return Boat;
};