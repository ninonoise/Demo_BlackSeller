import React from 'react';

const Account = () => {
    return (
        <section className="Container_General">
            <article className="Detail_Section">
                <h1>
                    MI CUENTA
                </h1>
                <p>
                    Correo Electrónico<br/>
                
                <input type="text" placeholder="usuario@blackseller.com.mx"></input>
                </p>
                <p>
                    Contraseña<br/>
                
                <input type="password" placeholder="*****"></input>
                </p>
                <button>Accesar</button>
                
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

export default Account;