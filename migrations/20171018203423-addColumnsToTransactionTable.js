'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    


    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeBalanceTransactionId',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeTractionCreated',
      Sequelize.DATE
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeUser',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeFailureCode',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeFailureMessage',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeInvoice',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'paid',
      Sequelize.BOOLEAN
    );

    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeRefunded',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeCardType',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeCountry',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeFingerprint',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeFunding',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'cardLastFourDigits',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'cardExpiryMonth',
      Sequelize.INTEGER
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'cardExpiryYear',
      Sequelize.INTEGER
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'cardId',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeStatus',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeRefund',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'transaction'
      },
      'stripeHasMore',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
