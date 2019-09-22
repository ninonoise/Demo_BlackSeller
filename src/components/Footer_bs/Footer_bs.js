import React from 'react';
import { Link } from 'react-router-dom';
import fb_icon from '../../img/fb.png'

const Footer_bs = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link href="http://www.facebook.com/blacksellercoleccionables" target="_blank">
                        <img src={fb_icon} alt=""></img>
                    </Link>
                </li>
            </ul>
        </footer>

            


    )
}

export default Footer_bs;