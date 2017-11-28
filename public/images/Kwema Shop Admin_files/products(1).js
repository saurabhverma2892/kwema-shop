"use strict";
(function(){

function productsController($scope, Products) {
  var self = this;

  self.products = [];

  self.editingProduct = editingProduct;

  function editingProduct(product){
    console.log(product);
    var cartModal = UIkit.modal("#editingProduct");
    cartModal.show();
  }

  Products.getAllProducts().then(function(data){
    console.log(data);
    self.products = data.data;
    console.log(self.products);
  })

}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: '/app/controllers/products/products.html',
        controller: productsController,
        controllerAs : "productsController"
      });
  });

})();