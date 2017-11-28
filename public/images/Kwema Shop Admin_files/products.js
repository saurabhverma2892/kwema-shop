'use strict';

angular.module('app')
  .service('Products', function ($http) {

    var service = {

      evaluateStudent: function(data){
        console.log("in evaluate student");
        console.log(data);
          return $http({
            url: '/admin/student/evalue-moderator',
            method:'POST',
            data:data
            /*params: {
              page_number:pageNumber,
              numberOfEntries:numberOfEntries
            }*/
          });
      },

      getAllUsers: function(){
        console.log("here too working");
        return $http({
          url:'/admin/user/all',
          method:'GET'
        });
      },

      addUser: function(data){
        return $http({
          url:'/admin/user/create',
          method:'POST',
          data:data
        })
      },

      editUser: function(data){
        return $http({
          url:'/admin/user/edit',
          method:'POST',
          data:data
        })
      },

      deleteUser: function(data){
        return $http({
          url:'/admin/user/delete',
          method:'POST',
          data:data
        })
      },

      getAllTeachers: function(data){
        return $http({
          url:'/admin/teacher/all',
          method:'GET'
        })
      },

      getApprovedEssays: function(){
        return $http({
          url:'/admin/essay/approved',
          method:'GET'
        })
      },

      getAllProducts: function(){
        return $http({
          url:'/api/products',
          method:'GET'
        })
      }



    }

    return service;

  });
