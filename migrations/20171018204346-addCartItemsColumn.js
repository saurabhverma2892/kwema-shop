'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameTable('cart', 'cartitem').then(data=>{
      queryInterface.addColumn({
          tableName: 'cartitem'
        },
        'planId',
        Sequelize.INTEGER
      );

      queryInterface.addColumn({
          tableName: 'cartitem'
        },
        'cartId',
        Sequelize.INTEGER
      );

      queryInterface.addColumn({
          tableName: 'cartitem'
        },
        'planType',
        Sequelize.STRING
      );
    })

    



    queryInterface.createTable('cart', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        transactionId: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: "cart",
        timestamps: true
    });

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
