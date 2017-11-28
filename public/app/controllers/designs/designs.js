"use strict";
(function(){

  function designsController($scope, Designs) {
    console.log("working in designs");
    var self = this;
    self.designs=[];

    self.editingDesign = editingDesign;
    self.saveEditedDesign = saveEditedDesign;
    self.addingNew = false;
    self.addNew = addNew;
    self.addNewCurrency = addNewCurrency;
    self.addNewDesign = addNewDesign;
    self.newdesign={
      currencies:[]
    }

    function editingDesign(design){
      design.newdesign=angular.copy(design);
      design.editing=true;
    }

    function saveEditedDesign(design){
      console.log(design);
      Designs.updateDesign(design.newdesign).then(function(data){
        console.log(data);
        design.editing=false;
        self.designs[self.designs.indexOf(design)]=design.newdesign;
      })
    }

    function addNew(){
      self.addingNew = true;
      self.newdesign={
        currencies:[{currency:"",value:""}]
      }
    }

    function addNewCurrency(){
      self.newdesign.currencies.push({currency:"",value:""})
    }

    function addNewDesign(){
      console.log(self.newdesign);
      Designs.addNewDesign(self.newdesign).then(data=>{
        self.designs.unshift(data.data);
      })
    }

    Designs.getAllDesigns().then(function(data){
      console.log(data);
      self.designs=data.data
    })


  }

  angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('designs', {
        url: '/designs',
        templateUrl: '/app/controllers/designs/designs.html',
        controller: designsController,
        controllerAs : "designsController"
      });
  });

})();