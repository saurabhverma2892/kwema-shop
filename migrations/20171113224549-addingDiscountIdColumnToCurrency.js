'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn({
        tableName: 'currency'
      },
      'discountId',
      Sequelize.INTEGER
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
