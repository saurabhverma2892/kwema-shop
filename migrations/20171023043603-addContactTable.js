'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('contact', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        message: {
          type: Sequelize.TEXT
        },
        status: {
          type: Sequelize.STRING
        }
    },
    {
        tableName: "contact",
        timestamps: true
    });


  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('contact');
  }
};
