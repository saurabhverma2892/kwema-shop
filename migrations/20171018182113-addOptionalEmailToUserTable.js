'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'user'
      },
      'optionalEmail',
      Sequelize.STRING
    );

    queryInterface.addColumn({
        tableName: 'user'
      },
      'addressedToName',
      Sequelize.STRING
    );

    queryInterface.addColumn({
        tableName: 'user'
      },
      'areaCode',
      Sequelize.STRING
    );

    queryInterface.addColumn({
        tableName: 'user'
      },
      'country',
      Sequelize.STRING
    );

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'user',
      'optionalEmail');

    queryInterface.removeColumn(
      'user',
      'addressedToName');

    queryInterface.removeColumn(
      'user',
      'areaCode');

    queryInterface.removeColumn(
      'user',
      'country');

  }

}