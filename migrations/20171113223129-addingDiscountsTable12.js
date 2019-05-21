'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("discount", [
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
      ])
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
