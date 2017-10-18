'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('design', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        details: {
            type: Sequelize.TEXT
        },
        features: {
            type: Sequelize.TEXT
        },
        designer: {
          type: Sequelize.STRING
        },
        manufacturer: {
          type: Sequelize.STRING
        }, 
        images: {
          type: Sequelize.TEXT
        },
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "design",
        timestamps: true
    });

    queryInterface.createTable('product', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        productId: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        details: {
            type: Sequelize.TEXT
        },
        features: {
            type: Sequelize.TEXT
        },
        designer: {
          type: Sequelize.STRING
        },
        manufacturer: {
          type: Sequelize.STRING
        },
        designId: {
          type: Sequelize.INTEGER
        },
        images: {
          type: Sequelize.TEXT
        },
        price: {
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "product",
        timestamps: true
    });

    queryInterface.createTable('user', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        city: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.STRING
        },
        zipCode: {
            type: Sequelize.INTEGER
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        },
        sessionId: {
            type: Sequelize.STRING
        },
        creditCardNumber: {
            type: Sequelize.INTEGER
        },
        creditCardName: {
            type: Sequelize.STRING
        },
        cvv: {
            type: Sequelize.INTEGER
        },
        expirtyMonth: {
            type: Sequelize.INTEGER
        },
        expirtyYear: {
            type: Sequelize.INTEGER
        },
        registered: {
            type: Sequelize.BOOLEAN
        },
        verified: {
            type: Sequelize.BOOLEAN
        }
    },
    {
        tableName: "user",
        timestamps: true
    });


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
        productId: {
            type: Sequelize.INTEGER
        },
        designId: {
            type: Sequelize.INTEGER
        },
        quantity: {
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


    queryInterface.createTable('transaction', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        cartId: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        details: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        sessionId: {
            type: Sequelize.STRING
        },
        stripeId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "transaction",
        timestamps: true
    });

    queryInterface.bulkInsert('design', [
      {
        name: 'Pacific Ocean',
        price: 100
      },
      {
        name: 'Eve',
        price: 100
      }
    ]);  
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('design');
    queryInterface.dropTable('product');
    queryInterface.dropTable('users');
    queryInterface.dropTable('cart');
    queryInterface.dropTable('transaction');
  }
};
