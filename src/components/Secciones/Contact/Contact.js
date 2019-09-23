import React from 'react';

const Contact = () => {
    return (
        <section className="Container_General">
            <article className="Detail_Section">
                <h1>
                    CONTACTO
                </h1>
                <p>
                    Nombre<br/>
                
                <input type="text" placeholder="Nombre"></input>
                </p>
                <p>
                    Correo Electrónico<br/>
                
                <input type="text" placeholder="usuario@blackseller.com.mx"></input>
                </p>
                <p>
                    Comentarios<br/>
                
                <textarea />
                </p>
                <button>Enviar</button>
                
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

export default Contact;