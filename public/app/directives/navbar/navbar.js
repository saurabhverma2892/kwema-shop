"use strict";

(function(){

    function navbarController($scope) {

    }

    angular.module('app')
      .directive('navbar', function() {
        return {
            templateUrl: '/app/directives/navbar/navbar.html',
            restrict: 'E',
            controller: navbarController,
            controllerAs: 'navbarController'
        };
      });

})();
