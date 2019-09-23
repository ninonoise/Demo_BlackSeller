import React from 'react';
import StockPreview from '../StockPreview/StockPreview';
import androide21 from '../../../../img/products/androide21.jpg';
import eva from '../../../../img/products/eva.jpg';
import blackwidow from '../../../../img/products/blackwidow.jpg';
import garuda from '../../../../img/products/garuda.jpg';
import ironman from '../../../../img/products/ironman.jpg';
import leo from '../../../../img/products/leo.jpg';
import python from '../../../../img/products/python.jpg';
import goku from '../../../../img/products/goku.jpg';

const fakeStock = [
    {
        id: 0,
        title: "ANDROIDE 21 SH FIGUARTS",
        product_image: androide21,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 1,
        title: "GOKU SSGSS SH FIGUARTS",
        product_image: goku,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 2,
        title: "BLACK WIDOW SH FIGUARTS",
        product_image: blackwidow,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"

    },
    {
        id: 3,
        title: "EVA-01 METAL BUILD",
        product_image: eva,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 4,
        title: "AIAKOS GARUDA",
        product_image: garuda,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 5,
        title: "IRON MAN MARK 50",
        product_image: ironman,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 6,
        title: "AIORA LEO MYTH EX",
        product_image: leo,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    },
    {
        id: 7,
        title: "IRON MAN MARK 20",
        product_image: python,
        product_description: "Esta monilla está bien chida, comprala ya!!",
        price: "$1,250",
        specs: "PVC"
    }
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
                
                    {renderStock}
                
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