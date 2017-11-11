'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("currency", [
      {
        currency: "USD",
        value: 99,
        designId:1
      },
      {
        currency: "MXN",
        value: 1880,
        designId:1
      },
      {
        currency: "USD",
        value: 169,
        designId:2
      },
      {
        currency: "MXN",
        value: 3190,
        designId:2
      },
      {
        currency:"USD",
        value:2.99,
        planId:1
      },
      {
        currency:"USD",
        value:2.99,
        planId:2
      },
      {
        currency:"USD",
        value:2.99,
        planId:3
      },
      {
        currency:"USD",
        value:2.99,
        planId:4
      },
      {
        currency:"USD",
        value:2.99,
        planId:5
      },
      {
        currency:"USD",
        value:2.99,
        planId:6
      },
      {
        currency:"USD",
        value:2.99,
        planId:19
      },
      {
        currency:"USD",
        value:2.99,
        planId:20
      },
      {
        currency:"USD",
        value:2.99,
        planId:21
      },
      {
        currency:"USD",
        value:2.99,
        planId:22
      },
      {
        currency:"MXN",
        value:59,
        planId:1
      },
      {
        currency:"MXN",
        value:59,
        planId:2
      },
      {
        currency:"MXN",
        value:59,
        planId:3
      },
      {
        currency:"MXN",
        value:59,
        planId:4
      },
      {
        currency:"MXN",
        value:59,
        planId:5
      },
      {
        currency:"MXN",
        value:59,
        planId:6
      },
      {
        currency:"MXN",
        value:59,
        planId:19
      },
      {
        currency:"MXN",
        value:59,
        planId:20
      },
      {
        currency:"MXN",
        value:59,
        planId:21
      },
      {
        currency:"MXN",
        value:59,
        planId:22
      },



      {
        currency:"USD",
        value:4.99,
        planId:7
      },
      {
        currency:"USD",
        value:4.99,
        planId:8
      },
      {
        currency:"USD",
        value:4.99,
        planId:9
      },
      {
        currency:"USD",
        value:4.99,
        planId:10
      },
      {
        currency:"USD",
        value:4.99,
        planId:11
      },
      {
        currency:"USD",
        value:4.99,
        planId:12
      },
      {
        currency:"USD",
        value:4.99,
        planId:23
      },
      {
        currency:"USD",
        value:4.99,
        planId:24
      },
      {
        currency:"USD",
        value:4.99,
        planId:25
      },
      {
        currency:"USD",
        value:4.99,
        planId:26
      },
      {
        currency:"MXN",
        value:99,
        planId:7
      },
      {
        currency:"MXN",
        value:99,
        planId:8
      },
      {
        currency:"MXN",
        value:99,
        planId:9
      },
      {
        currency:"MXN",
        value:99,
        planId:10
      },
      {
        currency:"MXN",
        value:99,
        planId:11
      },
      {
        currency:"MXN",
        value:99,
        planId:12
      },
      {
        currency:"MXN",
        value:99,
        planId:23
      },
      {
        currency:"MXN",
        value:99,
        planId:24
      },
      {
        currency:"MXN",
        value:99,
        planId:25
      },
      {
        currency:"MXN",
        value:99,
        planId:26
      },









      {
        currency:"USD",
        value:7.99,
        planId:13
      },
      {
        currency:"USD",
        value:7.99,
        planId:14
      },
      {
        currency:"USD",
        value:7.99,
        planId:15
      },
      {
        currency:"USD",
        value:7.99,
        planId:16
      },
      {
        currency:"USD",
        value:7.99,
        planId:17
      },
      {
        currency:"USD",
        value:7.99,
        planId:18
      },
      {
        currency:"USD",
        value:7.99,
        planId:27
      },
      {
        currency:"USD",
        value:7.99,
        planId:28
      },
      {
        currency:"USD",
        value:7.99,
        planId:29
      },
      {
        currency:"USD",
        value:7.99,
        planId:30
      },
      {
        currency:"MXN",
        value:149,
        planId:13
      },
      {
        currency:"MXN",
        value:149,
        planId:14
      },
      {
        currency:"MXN",
        value:149,
        planId:15
      },
      {
        currency:"MXN",
        value:149,
        planId:16
      },
      {
        currency:"MXN",
        value:149,
        planId:17
      },
      {
        currency:"MXN",
        value:149,
        planId:18
      },
      {
        currency:"MXN",
        value:149,
        planId:27
      },
      {
        currency:"MXN",
        value:149,
        planId:28
      },
      {
        currency:"MXN",
        value:149,
        planId:29
      },
      {
        currency:"MXN",
        value:149,
        planId:30
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
