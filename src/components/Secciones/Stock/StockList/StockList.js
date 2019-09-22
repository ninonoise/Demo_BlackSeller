import React from 'react';
import StockPreview from '../StockPreview/StockPreview';

const fakeStock = [
    {
        id: 0,
        title: "ANDROIDE 21 SH FIGUARTS",
        product_image: "../../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 1,
        title: "GOKU SSGSS SH FIGUARTS",
        product_image: "./androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 2,
        title: "SIEGFRIED ALPHA DOUBE MYTH CLOTH EX",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
        
    },
    {
        id: 3,
        title: "OHHHHH",
        product_image: "../../../../../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 4,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 5,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 6,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 7,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 8,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 9,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 10,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 11,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 12,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 13,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 14,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 15,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 16,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 17,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description:"Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
]

const StockList = () => {

    const renderStock = fakeStock.map( eachStock => (
        <StockPreview
            id={eachStock.id}
            title={eachStock.title}
            product_image={eachStock.product_image}
            product_description={eachStock.product_description}
            price={eachStock.price}
            specs={eachStock.specs}
            key={eachStock.id}
        />
    ) )

    return (
        <div className = "StockList">
            
               {renderStock}
            
        </div>
    )
}


export default StockList;