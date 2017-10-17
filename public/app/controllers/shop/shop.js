"use strict";
(function(){

function shopController($scope) {
  console.log("working in shop");
  var self = this;
  self.products=[];


}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/',
        templateUrl: '/app/controllers/shop/shop.html',
        controller: shopController,
        controllerAs : "shopController"
      });
  });

})();