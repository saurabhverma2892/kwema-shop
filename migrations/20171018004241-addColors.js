'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('product', [
      {
        name: 'Dream',
        details: 'Gold plated and Mother of Pearl',
        designId:2,
        price: 140,
        images:"/images/dreameve.jpg"
      },
      {
        name: 'All Black Everything',
        details: 'Rhodium-plated and Onyx',
        designId:2,
        price: 140,
        images:"/images/allblackeve.jpg"
      },
      {
        name: 'Life is Rosé',
        details: 'Rose gold-plated and Onyx',
        designId:2,
        price: 140,
        images:"/images/roseeve.jpg"
      },
      {
        name: 'Caribbean Cruise',
        details: 'Gold plated and turquoise',
        designId:2,
        price: 140,
        images:"/images/caribbeaneve.jpg"
      },
      {
        name: 'Amore',
        details: 'Rhodium-plated and Mother of Pearl',
        designId:2,
        price: 140,
        images:"/images/amoreeve.jpg"
      },
      {
        name: 'Timeless',
        details: 'Gold plated and Onyx',
        designId:2,
        price: 140,
        images:"/images/timelesseve.jpg"
      },
      {
        name: 'Rosé',
        details: 'California, Rose-gold plated',
        designId:1,
        price: 69,
        images:"/images/rosepo.jpg"
      },
      {
        name: 'Gold',
        details: 'Sunshine , Gold-plated',
        designId:1,
        price: 69,
        images:"/images/goldpo.jpg"
      },
      {
        name: 'Silver',
        details: 'Acapulco, Silver-plated',
        designId:1,
        price: 69,
        images:"/images/silverpo.jpg"
      },
      {
        name: 'Black',
        details: 'Valpo, Rhodium plated',
        designId:1,
        price: 69,
        images:"/images/blackpo.jpg"
      }
    ]);  
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
