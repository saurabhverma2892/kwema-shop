"use strict";
(function(){

function productsController($scope, Products, Designs) {
  var self = this;

  self.products = [];

  self.editingProduct = editingProduct;
  self.deleteProduct = deleteProduct;
  self.cancelEditing = cancelEditing;
  self.saveEditedProduct = saveEditedProduct;
  self.addNew = addNew;
  self.designs = [];
  self.newproduct = {};
  self.cancelAddNewProduct = cancelAddNewProduct;
  self.addNewProduct = addNewProduct;

  self.addingNew = false;

  Designs.getAllDesigns().then(function(data){
    console.log(data);
    self.designs=data.data;
  })

  function saveEditedProduct(product){
    console.log(product.newproduct);

    Products.saveProduct(product.newproduct).then(function(data){
      console.log(data);
      //product=product.newproduct;
      product.editing=false;
      self.products[self.products.indexOf(product)]=product.newproduct;
      //product=product.newproduct;
    })
  }

  function cancelEditing(product){
    product.editing=false;
  }

  function editingProduct(product){
    product.newproduct=angular.copy(product);
    product.editing=true;
  }

  function deleteProduct(product){
    Products.deleteProduct(product.id).then(function(data){
      self.products.splice(self.products.indexOf(product), 1);
    })
  }

  function addNew(){
    self.addingNew = true;
    self.newproduct = {designId:self.designs[0].id};
  }

  function cancelAddNewProduct(){
    self.addingNew = false;
  }

  function addNewProduct(){
    Products.addNewProduct(self.newproduct).then(function(data){
      self.addingNew = false;
      self.products.unshift(data.data);
    })
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