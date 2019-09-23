import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo_bs.png'
import cartIcon from '../../img/cartIcon.png'
import toggler from '../../img/toggler.png'

const Header_bs = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light nav_black sticky-top">
      <div className="container">
        <Link to="/">
          <img src={logo} alt=""></img>
        </Link>
        <Link className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon white_color">
            <img src={toggler} alt=""></img>
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto header_font">
            <li className="nav-item dropdown">
              <NavLink href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">EN STOCK</NavLink>
              <div className="dropdown-menu dropdown_custom">
                <Link to="/stock" className="dropdown-item">SH FIGUARTS</Link>
                <Link to="/stock" className="dropdown-item">DRAGON BALL</Link>
                <Link to="/stock" className="dropdown-item">SAINT SEIYA</Link>
                <Link to="/stock" className="dropdown-item">STORM COLLECTIBLES</Link>
                <Link to="/stock" className="dropdown-item">FIGMA / NENDOROID</Link>
                <Link to="/stock" className="dropdown-item">MARVEL / DC / STAR WARS</Link>
                <Link to="/stock" className="dropdown-item">PERSONAJES DE VIDEOJUEGOS</Link>
                <Link to="/stock" className="dropdown-item">ROBOTS / MECHAS</Link>
                <Link to="/stock" className="dropdown-item">FIGURAS ESTATICAS</Link>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  white_color" to="/stock">PREVENTAS</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">PLAYERAS</NavLink>
              <div className="dropdown-menu dropdown_custom">
                <Link to="/stock" className="dropdown-item">HOMBRE</Link>
                <Link to="/stock" className="dropdown-item">MUJER</Link>
              </div>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link  white_color" to="/Questions">FAQ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  white_color" to="/Contact">CONTACTO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  white_color" to="/Account">MI CUENTA</NavLink>
            </li>
            <li className="nav-item white_color">
              <Link className="nav-link" to="/Cart">
                <img src={cartIcon} alt=""></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header_bs;