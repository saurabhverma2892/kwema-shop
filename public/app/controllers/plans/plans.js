"use strict";
(function(){

function plansController($scope) {
  console.log("working in plans");
  var self = this;
  self.products=[];


}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plans', {
        url: '/plans',
        templateUrl: '/app/controllers/plans/plans.html',
        controller: plansController,
        controllerAs : "plansController"
      });
  });

})();