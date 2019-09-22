import React from 'react';
import {Link} from 'react-router-dom'

const StockPreview = ({id, title, product_image, price}) => (
        <article className="StockPreview">
            <Link to={`/stock/${id}`}>
                <img src={product_image} alt=""/>
                <h5>
                    {title}
                </h5>
                <h4>
                    {price}
                </h4>
               
            </Link>
        </article>
)


export default StockPreview;