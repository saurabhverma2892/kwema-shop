'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('design', [
      {
        name: 'Pacific Ocean',
        price: 69,
        images: '["/images/pacificcollation.png"]'
      },
      {
        name: 'Eve',
        price: 140,
        images: '["/images/evecollection.png"]'
      }
    ])
     
  },

  down: function (queryInterface, Sequelize) {
  }
};
