'use strict';

angular.module('app')
  .service('Designs', function ($http) {

    var service = {

      getAllDesigns: function(){
        return $http({
          url:'/api/designs',
          method:'GET'
        })
      },

      updateDesign:function(data){
        return $http({
          url:'/api/designs/update',
          method:'POST',
          data:data
        })
      },

      addNewDesign:function(data){
        return $http({
          url:'/api/designs/add',
          method:'POST',
          data:data
        })
      }

    }

    return service;

  });
