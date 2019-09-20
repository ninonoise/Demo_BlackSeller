import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

const Header_bs = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light nav_black sticky-top">
        <div className="container">
          <Link className="navbar-brand text-light font-weight-bold" href="#">
            <img src="/assets/img/logo_bs.png" alt="" />
          </Link>
          <Link className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon white_color"></span>
          </Link>
          <div className="input-group mb-1 col-md-3">
            <input className="form-control  fondo_gris" type="text" placeholder="Buscar" />
            <div className="input-group-append">
              <Link className="btn btn-outline-secondary fondo_rojo" type="Link">D</Link>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto header_font">
              <li className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">EN STOCK</Link>
                <div className="dropdown-menu dropdown_custom">
                  <Link href="#" className="dropdown-item">SAINT SEIYA</Link>
                  <Link href="#" className="dropdown-item">DRAGON BALL</Link>
                  <Link href="#" className="dropdown-item">SH FIGUARTS</Link>
                  <Link href="#" className="dropdown-item">STORM COLLECTIBLES</Link>
                  <Link href="#" className="dropdown-item">FIGMA / NENDOROID</Link>
                  <Link href="#" className="dropdown-item">MARVEL / DC / STAR WARS</Link>
                  <Link href="#" className="dropdown-item">PERSONAJES DE VIDEOJUEGOS</Link>
                  <Link href="#" className="dropdown-item">ROBOTS / MECHAS</Link>
                  <Link href="#" className="dropdown-item">FIGURAS ESTATICAS</Link>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  white_color" href="#">PREVENTAS</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">PLAYERAS</Link>
                <div className="dropdown-menu dropdown_custom">
                  <Link href="#" className="dropdown-item">HOMBRE</Link>
                  <Link href="#" className="dropdown-item">MUJER</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link  white_color" href="#">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  white_color" href="#">CONTACTO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  white_color" href="#">MI CUENTA</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header_bs;