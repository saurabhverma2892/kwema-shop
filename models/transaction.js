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
        },
        email: {
            type: Sequelize.STRING
        },
        compropagoId: {
            type: Sequelize.STRING
        },
        compropagoShortId: {
            type: Sequelize.STRING
        },
        compropagoStatus: {
            type: Sequelize.STRING
        },
        compropagoExpiresAt: {
            type: Sequelize.DATE
        },
        compropagoAmount: {
            type: Sequelize.INTEGER
        },
        compropagoCurrency: {
            type: Sequelize.STRING
        },
        compropagoRefunded: {
            type: Sequelize.BOOLEAN
        },
        compropagoFee: {
            type: Sequelize.INTEGER
        },
        compropagoMethod: {
            type: Sequelize.STRING
        },
        compropagoStore: {
            type: Sequelize.STRING
        },
        compropagoCountry: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: "transaction",
        timestamps: true
    });

    function initialize(){

    }

    function addTransaction(transactionInfo,user,cartId){
        return Transaction.create({
            userId:user.id,
            amount:transactionInfo.amount,
            status:transactionInfo.outcome.seller_message,
            stripeId:transactionInfo.id,
            type: "stripe",
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
            stripeHasMore:transactionInfo.refunds.has_more,
            email:user.email
        })
    }

    function addTransactionForCompro(amount,user,cartId){
        return Transaction.create({
            userId:user.id,
            amount:amount,
            status:"pending",
            cartId:cartId,
            email:user.email,
            type: "compropago"
        });
    }

    function updateTransactionForCompro(params){
        return new Promise((resolve,reject)=>{
            Transaction.findOne({
                where:{
                    email:params.customer.customer_email
                },
                order:"updatedAt DESC"
            }).then(transactionDetails=>{
                console.log("got transaction");
                var status = "pending"
                if(params.type=="charge.pending"){
                }
                else if(params.type=="charge.success"){
                    status="paid"
                }
                else if(params.type=="charge.expired"){
                    status="expired"
                }

                if(!transactionDetails.compropagoShortId){
                    console.log("new transaction");
                    console.log("creating transaction");

                    Transaction.update({
                        compropagoId:params.id,
                        compropagoShortId:params.short_id,
                        compropagoStatus:params.type,
                        status:status,
                        compropagoExpiresAt:params.expires_at,
                        paid:params.paid,
                        compropagoAmount:params.amount,
                        compropagoCurrency:params.currency,
                        compropagoRefunded:params.refunded,
                        compropagoFee:params.fee,
                        compropagoMethod:params.order_info.payment_method,
                        compropagoStore:params.order_info.store,
                        compropagoCountry:params.order_info.country
                    },
                    {
                        where:{
                            id:transactionDetails.id,
                            type:"compropago"
                        }
                    }).then(updatedTransactions=>{
                        return resolve(transactionDetails);
                    }).catch(err=>{
                        return reject(err);
                    })
                }
                else
                {
                    console.log("transaction exists");
                    console.log("updating transaction");
                   Transaction.update({
                       compropagoStatus:params.type,
                       status:status,
                       paid:params.paid,
                       compropagoAmount:params.amount,
                       compropagoCurrency:params.currency,
                       compropagoRefunded:params.refunded,
                       compropagoFee:params.fee,
                       compropagoMethod:params.order_info.payment_method,
                       compropagoStore:params.order_info.store,
                       compropagoCountry:params.order_info.country
                   },
                   {
                       where:{
                           compropagoShortId:params.short_id,
                           type:"compropago"
                       }
                   }).then(updatedTransactions=>{
                       return resolve(transactionDetails);
                   }).catch(err=>{
                       return reject(err);
                   }) 
                }
            }).catch(err=>{
                return reject(err);
            })
        })
    }


    return {
        Transaction,
        initialize,
        addTransaction,
        addTransactionForCompro,
        updateTransactionForCompro
    };
};
