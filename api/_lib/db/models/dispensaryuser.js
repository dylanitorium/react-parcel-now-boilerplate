"use strict";

module.exports = (sequelize, DataTypes) => {
  const DispensaryUser = sequelize.define(
    "DispensaryUser",
    {
      auth0Id: { type: DataTypes.STRING, primaryKey: true },
      firstName: DataTypes.STRING,
      surname: DataTypes.STRING,
      contactPhoneNumber: DataTypes.STRING
    },
    {}
  );
  DispensaryUser.associate = function(models) {
    // associations can be defined here
  };
  return DispensaryUser;
};
