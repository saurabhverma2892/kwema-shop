'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'email',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoId',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoShortId',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoStatus',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoExpiresAt',
      Sequelize.DATE
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoAmount',
      Sequelize.INTEGER
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoCurrency',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoRefunded',
      Sequelize.BOOLEAN
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoFee',
      Sequelize.INTEGER
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoMethod',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoStore',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'compropagoCountry',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'type',
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
