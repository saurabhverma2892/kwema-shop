"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("product", [
      {
        name: "Dream",
        details: "Gold plated and Mother of Pearl",
        designId:2,
        price: 140,
        images:'["/images/dreameve1.jpg","/images/dreameve2.jpg","/images/dreameve3.jpg"]',
        color:"#FFC72C",
        primaryImage:"/images/dreameve1.jpg"
      },
      {
        name: "All Black Everything",
        details: "Rhodium-plated and Onyx",
        designId:2,
        price: 140,
        images:'["/images/allblackeve1.jpg","/images/allblackeve2.jpg","/images/allblackeve3.jpg","/images/allblackeve4.jpg"]',
        color:"#000000",
        primaryImage:"/images/allblackeve1.jpg"

      },
      {
        name: "Life is Rosé",
        details: "Rose gold-plated and Onyx",
        designId:2,
        price: 140,
        images:'["/images/roseeve1.jpg","/images/roseeve2.jpg","/images/roseeve3.jpg","/images/roseeve4.jpg"]',
        color:"#EFD1C6",
        primaryImage:"/images/roseeve1.jpg"

      },
      {
        name: "Caribbean Cruise",
        details: "Gold plated and turquoise",
        designId:2,
        price: 140,
        images:'["/images/caribbeaneve1.jpg","/images/caribbeaneve2.jpg","/images/caribbeaneve3.jpg","/images/caribbeaneve4.jpg"]',
        color:"#78E1E7",
        primaryImage:"/images/caribbeaneve1.jpg"

      },
      {
        name: "Amore",
        details: "Rhodium-plated and Mother of Pearl",
        designId:2,
        price: 140,
        images:'["/images/amoreeve1.jpg","/images/amoreeve2.jpg","/images/amoreeve3.jpg","/images/amoreeve4.jpg"]',
        color:"#5F4C0B",
        primaryImage:"/images/amoreeve1.jpg"

      },
      {
        name: "Timeless",
        details: "Gold plated and Onyx",
        designId:2,
        price: 140,
        images:'["/images/timelesseve1.jpg","/images/timelesseve2.jpg","/images/timelesseve3.jpg"]',
        color:"#C9A656",
        primaryImage:"/images/timelesseve1.jpg"

      },
      {
        name: "Rose Gold",
        details: "Rose-gold plated",
        designId:1,
        price: 129,
        images:'["/images/rosepo1.jpg","/images/rosepo2.jpg","/images/rosepo3.jpg","/images/rosepo4.jpg"]',
        color:"#EFD1C6",
        primaryImage:"/images/rosepo1.jpg"

      },
      {
        name: "Black",
        details: "Rhodium plated",
        designId:1,
        price: 129,
        images:'["/images/blackpo1.jpg","/images/blackpo2.jpg","/images/blackpo3.jpg","/images/blackpo3.jpg"]',
        color:"#000000",
        primaryImage:"/images/blackpo1.jpg"
      }
    ]);  
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
