import React from 'react';

const StockDetail = (props) => {

    const stockId = props.match.params.id

    return(
        <article>
            <h1>Stock Detail {stockId}</h1>
            <li key = {stockId}>
            
            <p>{props.match.params.title}</p>
                
                
                
            </li>
            <h1>
            
            </h1>
        </article>
    )
}


export default StockDetail;