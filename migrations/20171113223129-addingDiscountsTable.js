'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
    }).then(data=>{
      queryInterface.bulkInsert("currency", [
        {
          name: "Xmas",
          details: "Christmas discount",
          designId:1
        },
        {
          name: "Xmas",
          details: "Christmas discount",
          designId:2
        }
      ]).then(data=>{

        console.log(data);
      })


    });
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
