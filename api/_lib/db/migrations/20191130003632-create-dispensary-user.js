"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("DispensaryUsers", {
      auth0Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      contactPhoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("DispensaryUsers");
  }
};
