'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('currency', {
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
        currency: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId:{
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "currency",
        timestamps: true
    });


  },

  down: (queryInterface, Sequelize) => {
    
  }
};
