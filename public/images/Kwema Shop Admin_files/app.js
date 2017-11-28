'use strict';

angular.module('app', [
  'ui.router',
  'ngCookies',
  'angularUtils.directives.dirPagination',
  'ngToast',

]).config(function($urlRouterProvider, $locationProvider, $stateProvider, ngToastProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('logout', {
        url: '/logout',
        template: '',
        controller: function(){
            window.location.replace("/logout");
        }
    });

    ngToastProvider.configure({
        animation: 'slide',
        //horizontalPosition: 'left',
        //verticalPosition: 'bottom' // or 'fade'
    });
})
