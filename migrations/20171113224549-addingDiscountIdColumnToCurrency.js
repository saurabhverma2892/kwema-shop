'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn({
        tableName: 'currency'
      },
      'discountId',
      Sequelize.INTEGER
    ).then(data=>{

      queryInterface.bulkInsert("currency", [
        {
          currency: "USD",
          value: 89,
          discountId:1
        },
        {
          currency: "MXN",
          value: 1699,
          discountId:1
        },
        {
          currency: "USD",
          value: 130,
          discountId:2
        },
        {
          currency: "MXN",
          value: 2499,
          discountId:2
        }
      ]);


    })



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
