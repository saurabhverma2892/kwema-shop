'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'user'
      },
      'planId',
      Sequelize.INTEGER
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'user',
      'planId');
  }

}