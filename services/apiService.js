"use strict";

module.exports = app => {

    let Product = app.models.product;
    let Design = app.models.design;
    
    function getAllProducts(params){
        return Product.getAllProductsForAdmin();
    }

    function updateProduct(params){
        return Product.updateProduct(params);
    }

    function getAllDesigns(){
        return Design.getAllDesignsForAdmin();
    }

    function deleteProduct(id){
        return Product.deleteProduct(id);
    }

    function updateDesign(params){
        return Design.updateDesign(params);
    }

    function deleteDesign(id){
        Product.deleteProductsByDesignId(id).then(data=>{
            return Design.deleteDesign(id);
        })
    }

    function addNewProduct(params){
        return Product.addNewProduct(params);
    }

    return {
        getAllProducts,
        updateProduct,
        getAllDesigns,
        deleteProduct,
        updateDesign,
        deleteDesign,
        addNewProduct
    }
}