'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return Promise.all([
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
        }),
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
            },
            primaryImage:{
                type:Sequelize.STRING
            },
            color:{
                type:Sequelize.STRING
            },
            stone: {
                type:Sequelize.STRING
            },
            material: {
                type:Sequelize.STRING
            }
        },
        {
            tableName: "product",
            timestamps: true
        }),

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
                type: Sequelize.STRING
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
            },
            optionalEmail: {
                type: Sequelize.STRING
            },
            addressedToName: {
                type: Sequelize.STRING
            },
            areaCode: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            planId: {
                type: Sequelize.INTEGER
            },
            cardToken: {
                type: Sequelize.STRING
            },
            stripeId: {
                type: Sequelize.STRING
            },

        },
        {
            tableName: "user",
            timestamps: true
        }),
        queryInterface.createTable('cartitem', {
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
            },
            planId:{
                type: Sequelize.INTEGER
            },
            cartId:{
                type: Sequelize.INTEGER
            },
            planType:{
                type: Sequelize.STRING
            }
        },
        {
            tableName: "cartitem",
            timestamps: true
        }),

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
                type: Sequelize.STRING
            }
        },
        {
            tableName: "transaction",
            timestamps: true
        }),
        queryInterface.createTable('plan', {
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
            devicePrice: {
              type: Sequelize.INTEGER
            },
            monthlyPrice: {
              type: Sequelize.INTEGER
            },
            yearlyPrice: {
              type: Sequelize.INTEGER
            },
            productId: {
              type: Sequelize.INTEGER
            },
            designId: {
              type: Sequelize.INTEGER
            },
            name: {
              type: Sequelize.STRING
            }
        },
        {
            tableName: "plan",
            timestamps: true
        }),

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
        })
    ]),

    queryInterface.createTable('currency', {
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
        currency: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId:{
          type: Sequelize.INTEGER
        },
        discountId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "currency",
        timestamps: true
    }),
    queryInterface.createTable('discount', {
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
        name: {
            type: Sequelize.STRING
        },
        details: {
            type: Sequelize.STRING
        },
        percentage: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId:{
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "discount",
        timestamps: true
    })
     
  },

  down: function (queryInterface, Sequelize) {

    return Promise.all([
        queryInterface.dropTable('design'),
        queryInterface.dropTable('product'),
        queryInterface.dropTable('user'),
        queryInterface.dropTable('cart'),
        queryInterface.dropTable('transaction'),
        queryInterface.dropTable('plan')
        queryInterface.dropTable('currency')
        queryInterface.dropTable('discount'),
        queryInterface.dropTable('cartitem')
    ])
    
  }
};
