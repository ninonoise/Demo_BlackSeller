import React from 'react';
import StockPreview from '../StockPreview/StockPreview';

const fakeStock = [
    {
        id: 0,
        title: "Un cierto titulo"
    },
    {
        id: 1,
        title: "Un cierto titulation"
    },
    {
        id: 2,
        title: "Un cierto whatever"
    },
    {
        id: 3,
        title: "OHHHHH"
    },
    {
        id: 4,
        title: "COSASSSSS"
    },
]

const StockList = () => {

    const renderStock = fakeStock.map( eachStock => (
        <StockPreview
            id={eachStock.id}
            title={eachStock.title}
            key={eachStock.id}
        />
    ) )

    return (
        <ul className = "StockList">

            {renderStock}
            
        </ul>
    )
}


export default StockList;