'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('plan', [
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:1,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90
      },
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:2,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90

      },
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:3,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90

      },
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:4,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90

      },
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:5,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90

      },
      {
        name: 'Day',
        details: '[]',
        designId:2,
        productId:6,
        devicePrice: 220,
        monthlyPrice:4.99,
        yearlyPrice:49.90


      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:1,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90


      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:2,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90

      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:3,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:4,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:5,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:2,
        productId:6,
        devicePrice: 169,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:1,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:2,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90

      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:3,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:4,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:5,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:2,
        productId:6,
        devicePrice: 140,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },


      {
        name: 'Day',
        details: '[]',
        designId:1,
        productId:7,
        devicePrice: 140,
        monthlyPrice:4.99,
        yearlyPrice:49.90
      },
      {
        name: 'Day',
        details: '[]',
        designId:1,
        productId:8,
        devicePrice: 140,
        monthlyPrice:4.99,
        yearlyPrice:49.90
      },
      {
        name: 'Day',
        details: '[]',
        designId:1,
        productId:9,
        devicePrice: 140,
        monthlyPrice:4.99,
        yearlyPrice:49.90
      },
      {
        name: 'Day',
        details: '[]',
        designId:1,
        productId:10,
        devicePrice: 140,
        monthlyPrice:4.99,
        yearlyPrice:49.90
      },



      {
        name: 'Evening',
        details: '[]',
        designId:1,
        productId:7,
        devicePrice: 99,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:1,
        productId:8,
        devicePrice: 99,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:1,
        productId:9,
        devicePrice: 99,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },
      {
        name: 'Evening',
        details: '[]',
        designId:1,
        productId:10,
        devicePrice: 99,
        monthlyPrice:8.99,
        yearlyPrice:89.90
      },

      {
        name: 'Night',
        details: '[]',
        designId:1,
        productId:7,
        devicePrice: 69,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:1,
        productId:8,
        devicePrice: 69,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:1,
        productId:9,
        devicePrice: 69,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      },
      {
        name: 'Night',
        details: '[]',
        designId:1,
        productId:10,
        devicePrice: 69,
        monthlyPrice:11.99,
        yearlyPrice:119.90
      }
    ]); 

  },

  down: (queryInterface, Sequelize) => {
    
  }
};
