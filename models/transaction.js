"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var Transaction = sequelize.define("transaction", {  
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
        },

        stripeBalanceTransactionId: {
            type: Sequelize.STRING
        },
        stripeTractionCreated: {
            type: Sequelize.DATE
        },
        stripeUser: {
            type:Sequelize.STRING
        },
        stripeFailureCode: {
            type: Sequelize.STRING
        },
        stripeFailureMessage: {
            type: Sequelize.STRING
        },
        stripeInvoice: {
            type: Sequelize.STRING
        },
        paid: {
            type: Sequelize.BOOLEAN
        },
        stripeRefunded: {
            type: Sequelize.STRING
        },
        stripeCardType: {
            type: Sequelize.STRING
        },
        stripeRefunded: {
            type: Sequelize.STRING
        },
        stripeCountry: {
            type: Sequelize.STRING
        },
        stripeFingerprint: {
            type: Sequelize.STRING
        },
        stripeFunding: {
            type: Sequelize.STRING
        },
        cardLastFourDigits: {
            type: Sequelize.STRING
        },
        cardExpiryMonth: {
            type: Sequelize.INTEGER
        },
        cardExpiryYear: {
            type: Sequelize.INTEGER
        },
        cardId: {
            type: Sequelize.STRING
        },
        stripeStatus: {
            type: Sequelize.STRING
        },
        stripeRefunded: {
            type: Sequelize.STRING
        },
        stripeRefund: {
            type: Sequelize.STRING
        },
        stripeHasMore: {
            type: Sequelize.STRING
        },
        cartId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "transaction",
        timestamps: true
    });

    function initialize(){

    }

    function addTransaction(transactionInfo,user,cartId){
        Transaction.create({
            userId:user.id,
            amount:transactionInfo.amount,
            status:transactionInfo.outcome.seller_message,
            stripeId:transactionInfo.id,

            cartId:cartId,

            stripeBalanceTransactionId:transactionInfo.balance_transaction,
            stripeTractionCreated:transactionInfo.created,
            stripeUser:transactionInfo.customer,
            stripeFailureCode:transactionInfo.failure_code,
            stripeFailureMessage:transactionInfo.failure_message,
            stripeInvoice:transactionInfo.invoice,
            paid:transactionInfo.paid,

            stripeRefunded:transactionInfo.refunded,
            stripeCardType:transactionInfo.source.brand,
            stripeCountry:transactionInfo.source.country,
            stripeFingerprint:transactionInfo.source.fingerprint,
            stripeFunding:transactionInfo.source.funding,
            cardLastFourDigits:transactionInfo.source.last4,
            cardExpiryMonth:transactionInfo.source.exp_month,
            cardExpiryYear:transactionInfo.source.exp_year,
            cardId:transactionInfo.source.id,
            stripeStatus:transactionInfo.status,
            stripeRefund:transactionInfo.refunds.total_count,
            stripeHasMore:transactionInfo.refunds.has_more
        })
    }

    function addTransactionForCompro(amount,user,cartId){
        Transaction.create({
            userId:user.id,
            amount:amount,
            status:"pending",
            cartId:cartId
        })
    }


    return {
        Transaction,
        initialize,
        addTransaction,
        addTransactionForCompro
    };
};
