import React from 'react';

const StockDetail = (props) => {

    const stockId = props.match.params.id

    return(
        <article>
            <h1>
                Stock Detalle {stockId}
            </h1>
        </article>
    )
}


export default StockDetail;