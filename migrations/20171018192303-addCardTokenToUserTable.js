'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn({
        tableName: 'user'
      },
      'cardToken',
      Sequelize.STRING
    );

    queryInterface.addColumn({
        tableName: 'user'
      },
      'stripeId',
      Sequelize.STRING
    );

    
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'user',
      'cardToken');

    queryInterface.removeColumn(
      'user',
      'stripeId');
  }
};
