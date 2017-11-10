'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn({
        tableName: 'product'
      },
      'material',
      Sequelize.STRING
    );

    queryInterface.addColumn({
        tableName: 'product'
      },
      'stone',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
