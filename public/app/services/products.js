'use strict';

angular.module('app')
  .service('Products', function ($http) {

    var service = {

      getAllProducts: function(){
        return $http({
          url:'/api/products',
          method:'GET'
        })
      },

      saveProduct: function(data){
        return $http({
          url:'/api/products/update',
          method:'POST',
          data:data
        })
      },

      deleteProduct: function(id){
        return $http({
          url:'/api/products/delete',
          method:'POST',
          data:{
            id:id
          }
        })
      },

      addNewProduct: function(data){
        return $http({
          url:'/api/products/add',
          method:'POST',
          data:data
        })
      }

    }

    return service;

  });
