import React from 'react';

const StockDetail = (props) => {

    const stockId = props.match.params.id

    return (
        <section className="Container_General">
            <article className="Detail_Section">
                <h1>Stock Detail {stockId}</h1>
                <li key={stockId}>

                    <p>{props.match.params.title}</p>

                </li>
                <h1>

                </h1>
            </article>
            <div>
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
        </section>
    )
}


export default StockDetail;