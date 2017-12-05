"use strict"

let router = require("express").Router();

module.exports = app => {

    let apiController = app.controllers.apiController;
    
    router.route("/products").get((req,res,next)=>{
        apiController.getAllProducts(req,res,next);
    })

    /**
     * @api {get} /api/products Request All Products
     * @apiName GetProducts
     * @apiGroup Product
     *
     * @apiParamExample {json} Request-Example:
     *     {
     *     }
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [
    {
        "id": 1,
        "productId": null,
        "createdAt": null,
        "updatedAt": null,
        "details": "Gold plated and Mother of Pearl",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": "[\"/images/dreameve1.jpg\",\"/images/dreameve2.jpg\",\"/images/dreameve3.jpg\"]",
        "name": "Dream",
        "price": 140,
        "color": "#FFC72C",
        "primaryImage": "/images/dreameve1.jpg",
        "material": "18k Gold Plated",
        "stone": "Mother of Pearl",
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 1,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 220,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 1,
                "designId": 2,
                "name": "Day",
                "currencies": [
                    {
                        "id": 5,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 1,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 15,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 1,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 7,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 169,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 1,
                "designId": 2,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 25,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 7,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 35,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 7,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 13,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 1,
                "designId": 2,
                "name": "Night",
                "currencies": [
                    {
                        "id": 45,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 13,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 55,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 13,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "productId": null,
        "createdAt": null,
        "updatedAt": "2017-11-27T20:01:34.000Z",
        "details": "Rhodium-plated and Onyx",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": "[\"/images/allblackeve1.jpg\",\"/images/allblackeve2.jpg\",\"/images/allblackeve3.jpg\",\"/images/allblackeve4.jpg\"]",
        "name": "All Black Everything",
        "price": 140,
        "color": "#000000",
        "primaryImage": "/images/allblackeve1.jpg",
        "material": "asdfsadf",
        "stone": "coool",
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 2,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 220,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 2,
                "designId": 2,
                "name": "Day",
                "currencies": [
                    {
                        "id": 6,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 2,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 16,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 2,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 8,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 169,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 2,
                "designId": 2,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 26,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 8,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 36,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 8,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 14,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 2,
                "designId": 2,
                "name": "Night",
                "currencies": [
                    {
                        "id": 46,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 14,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 56,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 14,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "productId": null,
        "createdAt": null,
        "updatedAt": "2017-11-27T20:01:54.000Z",
        "details": "Gold plated and turquoise",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 1,
        "images": "[\"/images/caribbeaneve1.jpg\",\"/images/caribbeaneve2.jpg\",\"/images/caribbeaneve3.jpg\",\"/images/caribbeaneve4.jpg\"]",
        "name": "Caribbean Cruise",
        "price": 140,
        "color": "#78E1E7",
        "primaryImage": "/images/caribbeaneve1.jpg",
        "material": "nice",
        "stone": null,
        "design": {
            "id": 1,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:22.000Z",
            "details": "checking",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/pacificcollation.png\"]",
            "name": "Pacific Ocean",
            "price": 69,
            "currencies": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 99,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                },
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 1880,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "currencies": [
                        {
                            "id": 65,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 66,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 69,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 70,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 4,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 220,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 4,
                "designId": 2,
                "name": "Day",
                "currencies": [
                    {
                        "id": 8,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 4,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 18,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 4,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 10,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 169,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 4,
                "designId": 2,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 28,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 10,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 38,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 10,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 16,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 4,
                "designId": 2,
                "name": "Night",
                "currencies": [
                    {
                        "id": 48,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 16,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 58,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 16,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "productId": null,
        "createdAt": null,
        "updatedAt": null,
        "details": "Rhodium-plated and Mother of Pearl",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": "[\"/images/amoreeve1.jpg\",\"/images/amoreeve2.jpg\",\"/images/amoreeve3.jpg\",\"/images/amoreeve4.jpg\"]",
        "name": "Amore",
        "price": 140,
        "color": "#5F4C0B",
        "primaryImage": "/images/amoreeve1.jpg",
        "material": null,
        "stone": null,
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 5,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 220,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 5,
                "designId": 2,
                "name": "Day",
                "currencies": [
                    {
                        "id": 9,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 5,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 19,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 5,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 11,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 169,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 5,
                "designId": 2,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 29,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 11,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 39,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 11,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 17,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 5,
                "designId": 2,
                "name": "Night",
                "currencies": [
                    {
                        "id": 49,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 17,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 59,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 17,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "productId": null,
        "createdAt": null,
        "updatedAt": "2017-11-27T20:05:37.000Z",
        "details": "Gold plated and Onyx",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": "[\"/images/timelesseve1.jpg\",\"/images/timelesseve2.jpg\",\"/images/timelesseve3.jpg\"]",
        "name": "Timeless",
        "price": 140,
        "color": "#C9A656",
        "primaryImage": "/images/timelesseve1.jpg",
        "material": null,
        "stone": "working well",
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 6,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 220,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 6,
                "designId": 2,
                "name": "Day",
                "currencies": [
                    {
                        "id": 10,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 6,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 20,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 6,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 12,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 169,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 6,
                "designId": 2,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 30,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 12,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 40,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 12,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 18,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 6,
                "designId": 2,
                "name": "Night",
                "currencies": [
                    {
                        "id": 50,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 18,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 60,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 18,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "productId": null,
        "createdAt": null,
        "updatedAt": null,
        "details": "California, Rose-gold plated",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 1,
        "images": "[\"/images/rosepo1.jpg\",\"/images/rosepo2.jpg\",\"/images/rosepo3.jpg\",\"/images/rosepo4.jpg\"]",
        "name": "Rosé",
        "price": 69,
        "color": "#EFD1C6",
        "primaryImage": "/images/rosepo1.jpg",
        "material": null,
        "stone": null,
        "design": {
            "id": 1,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:22.000Z",
            "details": "checking",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/pacificcollation.png\"]",
            "name": "Pacific Ocean",
            "price": 69,
            "currencies": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 99,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                },
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 1880,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "currencies": [
                        {
                            "id": 65,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 66,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 69,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 70,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 19,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 7,
                "designId": 1,
                "name": "Day",
                "currencies": [
                    {
                        "id": 11,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 19,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 21,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 19,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 23,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 99,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 7,
                "designId": 1,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 31,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 23,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 41,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 23,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 27,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 69,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 7,
                "designId": 1,
                "name": "Night",
                "currencies": [
                    {
                        "id": 51,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 27,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 61,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 27,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "productId": null,
        "createdAt": null,
        "updatedAt": null,
        "details": "Valpo, Rhodium plated",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 1,
        "images": "[\"/images/blackpo1.jpg\",\"/images/blackpo2.jpg\",\"/images/blackpo3.jpg\",\"/images/blackpo3.jpg\"]",
        "name": "Black",
        "price": 69,
        "color": "#000000",
        "primaryImage": "/images/blackpo1.jpg",
        "material": null,
        "stone": null,
        "design": {
            "id": 1,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:22.000Z",
            "details": "checking",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/pacificcollation.png\"]",
            "name": "Pacific Ocean",
            "price": 69,
            "currencies": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 99,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                },
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 1880,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 1,
                    "currencies": [
                        {
                            "id": 65,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 66,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 69,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 89,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        },
                        {
                            "id": 70,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1699,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 1
                        }
                    ]
                }
            ]
        },
        "plans": [
            {
                "id": 22,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 140,
                "monthlyPrice": 5,
                "yearlyPrice": 50,
                "productId": 10,
                "designId": 1,
                "name": "Day",
                "currencies": [
                    {
                        "id": 14,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 3,
                        "planId": 22,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 24,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 59,
                        "planId": 22,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 26,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 99,
                "monthlyPrice": 9,
                "yearlyPrice": 90,
                "productId": 10,
                "designId": 1,
                "name": "Evening",
                "currencies": [
                    {
                        "id": 34,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 5,
                        "planId": 26,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 44,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 99,
                        "planId": 26,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            },
            {
                "id": 30,
                "createdAt": null,
                "updatedAt": null,
                "details": "[]",
                "devicePrice": 69,
                "monthlyPrice": 12,
                "yearlyPrice": 120,
                "productId": 10,
                "designId": 1,
                "name": "Night",
                "currencies": [
                    {
                        "id": 54,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "USD",
                        "value": 8,
                        "planId": 30,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    },
                    {
                        "id": 64,
                        "createdAt": null,
                        "updatedAt": null,
                        "currency": "MXN",
                        "value": 149,
                        "planId": 30,
                        "productId": null,
                        "designId": null,
                        "discountId": null
                    }
                ]
            }
        ]
    },
    {
        "id": 11,
        "productId": null,
        "createdAt": "2017-11-27T21:45:31.000Z",
        "updatedAt": "2017-11-27T21:45:31.000Z",
        "details": "check",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": null,
        "name": "check",
        "price": null,
        "color": null,
        "primaryImage": null,
        "material": "mat",
        "stone": "stone",
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": []
    },
    {
        "id": 12,
        "productId": null,
        "createdAt": "2017-11-27T21:47:09.000Z",
        "updatedAt": "2017-11-27T21:47:09.000Z",
        "details": "check",
        "features": null,
        "designer": null,
        "manufacturer": null,
        "designId": 2,
        "images": null,
        "name": "another",
        "price": null,
        "color": null,
        "primaryImage": null,
        "material": "mat",
        "stone": "stone",
        "design": {
            "id": 2,
            "createdAt": null,
            "updatedAt": "2017-11-27T21:13:37.000Z",
            "details": "working perfectly",
            "features": null,
            "designer": null,
            "manufacturer": null,
            "images": "[\"/images/evecollection.png\"]",
            "name": "Eve2",
            "price": 140,
            "currencies": [
                {
                    "id": 3,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "USD",
                    "value": 169,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                },
                {
                    "id": 4,
                    "createdAt": null,
                    "updatedAt": null,
                    "currency": "MXN",
                    "value": 3190,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "discountId": null
                }
            ],
            "discounts": [
                {
                    "id": 2,
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "Xmas",
                    "details": "Christmas discount",
                    "percentage": null,
                    "planId": null,
                    "productId": null,
                    "designId": 2,
                    "currencies": [
                        {
                            "id": 67,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 68,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 71,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 130,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        },
                        {
                            "id": 72,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 2499,
                            "planId": null,
                            "productId": null,
                            "designId": null,
                            "discountId": 2
                        }
                    ]
                }
            ]
        },
        "plans": []
    }
]
     *
     */

    router.route("/products/update").post((req,res,next)=>{
        apiController.updateProduct(req,res,next);
    })
    /**
         * @api {post} /api/products/update Update Products
         * @apiName UpdateProducts
         * @apiGroup Product
         *
         * @apiParamExample {json} Request-Example:
         {
             "name":"All Black",
             "material": "18k gold plated",
             "details": "Gold plated and Mother of Pearl",
             "stone":"Mother of allaa",
             "designId":2,
             "id":1
         }
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     [1]
    **/

    router.route("/products/delete").post((req,res,next)=>{
        console.log(req.body);
        apiController.deleteProduct(req,res,next);
    })

    /**
         * @api {post} /api/products/delete Delete Product
         * @apiName DeleteProduct
         * @apiGroup Product
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "id":1
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     true
    **/

    router.route("/designs").get((req,res,next)=>{
        apiController.getAllDesigns(req,res,next);
    })

    /**
         * @api {get} /api/designs Request All Designs
         * @apiName GetDesigns
         * @apiGroup Design
         *
         * @apiParamExample {json} Request-Example:
         *     {
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     [
                    {
                        "id": 1,
                        "createdAt": null,
                        "updatedAt": "2017-11-27T21:13:22.000Z",
                        "details": "checking",
                        "features": null,
                        "designer": null,
                        "manufacturer": null,
                        "images": "[\"/images/pacificcollation.png\"]",
                        "name": "Pacific Ocean",
                        "price": 69,
                        "currencies": [
                            {
                                "id": 1,
                                "createdAt": null,
                                "updatedAt": null,
                                "currency": "USD",
                                "value": 99,
                                "planId": null,
                                "productId": null,
                                "designId": 1,
                                "discountId": null
                            },
                            {
                                "id": 2,
                                "createdAt": null,
                                "updatedAt": null,
                                "currency": "MXN",
                                "value": 1880,
                                "planId": null,
                                "productId": null,
                                "designId": 1,
                                "discountId": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "createdAt": null,
                        "updatedAt": "2017-11-27T21:13:37.000Z",
                        "details": "working perfectly",
                        "features": null,
                        "designer": null,
                        "manufacturer": null,
                        "images": "[\"/images/evecollection.png\"]",
                        "name": "Eve2",
                        "price": 140,
                        "currencies": [
                            {
                                "id": 3,
                                "createdAt": null,
                                "updatedAt": null,
                                "currency": "USD",
                                "value": 169,
                                "planId": null,
                                "productId": null,
                                "designId": 2,
                                "discountId": null
                            },
                            {
                                "id": 4,
                                "createdAt": null,
                                "updatedAt": null,
                                "currency": "MXN",
                                "value": 3190,
                                "planId": null,
                                "productId": null,
                                "designId": 2,
                                "discountId": null
                            }
                        ]
                    }
                ]
    **/

    router.route("/designs/update").post((req,res,next)=>{
        apiController.updateDesign(req,res,next);
    })

    /**
         * @api {post} /api/designs/update Update Design
         * @apiName UpdateDesign
         * @apiGroup Design
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "name":"",
                    "details":"",
                    "id":1
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     [1]
    **/

    router.route("/designs/add").post((req,res,next)=>{
        apiController.addNewDesign(req,res,next);
    })


    router.route("/products/add").post((req,res,next)=>{
        apiController.addNewProduct(req,res,next);
    })
    /**
     * @api {post} /api/products/add Add Product
     * @apiName AddProduct
     * @apiGroup Product
     *
     * @apiParamExample {json} Request-Example:
     *     {
                "designId": 1, 
                "name": "new product", 
                "details": "some details", 
                "stone": "blackstone", 
                "material": "stoneheart"
            }
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
                "id": 15,
                "productId": null,
                "createdAt": "2017-12-04T20:09:50.000Z",
                "updatedAt": "2017-12-04T20:09:50.000Z",
                "details": "some details",
                "features": null,
                "designer": null,
                "manufacturer": null,
                "designId": 1,
                "images": null,
                "name": "new product",
                "price": null,
                "color": null,
                "primaryImage": null,
                "material": "stoneheart",
                "stone": "blackstone",
                "design": {
                    "id": 1,
                    "createdAt": null,
                    "updatedAt": "2017-12-04T20:03:59.000Z",
                    "details": "aksdfkjsadf",
                    "features": null,
                    "designer": null,
                    "manufacturer": null,
                    "images": "[\"/images/pacificcollation.png\"]",
                    "name": "askldj",
                    "price": 69,
                    "currencies": [
                        {
                            "id": 1,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "USD",
                            "value": 99,
                            "planId": null,
                            "productId": null,
                            "designId": 1,
                            "discountId": null
                        },
                        {
                            "id": 2,
                            "createdAt": null,
                            "updatedAt": null,
                            "currency": "MXN",
                            "value": 1880,
                            "planId": null,
                            "productId": null,
                            "designId": 1,
                            "discountId": null
                        }
                    ],
                    "discounts": [
                        {
                            "id": 1,
                            "createdAt": null,
                            "updatedAt": null,
                            "name": "Xmas",
                            "details": "Christmas discount",
                            "percentage": null,
                            "planId": null,
                            "productId": null,
                            "designId": 1,
                            "currencies": [
                                {
                                    "id": 65,
                                    "createdAt": null,
                                    "updatedAt": null,
                                    "currency": "USD",
                                    "value": 89,
                                    "planId": null,
                                    "productId": null,
                                    "designId": null,
                                    "discountId": 1
                                },
                                {
                                    "id": 66,
                                    "createdAt": null,
                                    "updatedAt": null,
                                    "currency": "MXN",
                                    "value": 1699,
                                    "planId": null,
                                    "productId": null,
                                    "designId": null,
                                    "discountId": 1
                                },
                                {
                                    "id": 69,
                                    "createdAt": null,
                                    "updatedAt": null,
                                    "currency": "USD",
                                    "value": 89,
                                    "planId": null,
                                    "productId": null,
                                    "designId": null,
                                    "discountId": 1
                                },
                                {
                                    "id": 70,
                                    "createdAt": null,
                                    "updatedAt": null,
                                    "currency": "MXN",
                                    "value": 1699,
                                    "planId": null,
                                    "productId": null,
                                    "designId": null,
                                    "discountId": 1
                                }
                            ]
                        }
                    ]
                },
                "plans": []
            }
    **/
    

    return router;
}

