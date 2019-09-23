import React from 'react';
import StockPreview from '../StockPreview/StockPreview';


const fakeStock = [
    {
        id: 0,
        title: "ANDROIDE 21 SH FIGUARTS",
        product_image: "../../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 1,
        title: "GOKU SSGSS SH FIGUARTS",
        product_image: "./androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 2,
        title: "SIEGFRIED ALPHA DOUBE MYTH CLOTH EX",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"

    },
    {
        id: 3,
        title: "OHHHHH",
        product_image: "../../../../../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 4,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 5,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 6,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 7,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 8,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 9,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 10,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 11,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 12,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 13,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 14,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 15,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 16,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 17,
        title: "COSASSSSS",
        product_image: "../../../img/products/androide21.jpg",
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
]

const StockList = () => {

    const renderStock = fakeStock.map(eachStock => (
        <StockPreview
            id={eachStock.id}
            title={eachStock.title}
            product_image={eachStock.product_image}
            product_description={eachStock.product_description}
            price={eachStock.price}
            specs={eachStock.specs}
            key={eachStock.id}
        />
    ))

    return (
        <div className="Container_General">
            <div className="StockList">
                <div className="StockList_Product">
                    {renderStock}
                </div>
            </div>
            <div>
                <ul className="SideMenu">
                    <li>Saint Seiya</li>
                    <li>Dragon Ball</li>
                    <li>Storm Collectibles</li>
                    <li>Videojuegos</li>
                    <li>Figuras Fijas</li>
                    <li>Sh Figuarts</li>
                    <li>Robots</li>
                    <li>Figma/Nendoroid</li>
                </ul>
            </div>
        </div>
    )
}


export default StockList;