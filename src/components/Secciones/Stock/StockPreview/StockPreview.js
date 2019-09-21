import React from 'react';
import {Link} from 'react-router-dom'

const StockPreview = ({id, title}) => (
        <article className="StockPreview">
            <Link to={`/stock/${id}`}>
                <h5>
                    {title}
                </h5>
               
            </Link>
        </article>
)


export default StockPreview;