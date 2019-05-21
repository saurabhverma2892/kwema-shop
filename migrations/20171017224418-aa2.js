'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return Promise.all([
        queryInterface.dropTable('design'),
        queryInterface.dropTable('product'),
        queryInterface.dropTable('user'),
        queryInterface.dropTable('cart'),
        queryInterface.dropTable('transaction'),
        queryInterface.dropTable('plan'),
        queryInterface.dropTable('currency'),
        queryInterface.dropTable('discount'),
        queryInterface.dropTable('cartitem')
    ])
     
  },

  down: function (queryInterface, Sequelize) {


  }
};
