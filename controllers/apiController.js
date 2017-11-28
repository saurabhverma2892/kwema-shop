"use strict"

module.exports = app => {

    let apiService = app.services.apiService;

    function getAllProducts(req,res,next){
        apiService.getAllProducts().then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function updateProduct(req,res,next){
        apiService.updateProduct(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function getAllDesigns(req,res,next){
        apiService.getAllDesigns().then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function deleteProduct(req,res,next){
        apiService.deleteProduct(req.body.id).then(data=>{
            res.send(true);
        }).catch(err=>{
            next(err);
        })
    }

    function updateDesign(req,res,next){
        apiService.updateDesign(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function addNewProduct(req,res,next){
        apiService.addNewProduct(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function addNewDesign(req,res,next){
        apiService.addNewDesign(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }


    return {
        getAllProducts,
        updateProduct,
        getAllDesigns,
        deleteProduct,
        updateDesign,
        addNewProduct
    }

}