import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo_bs.png'

const Header_bs = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light nav_black sticky-top">
        <div className="container">
          <Link href="#">
            <img src={logo} alt=""></img>
          </Link>
          <Link className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon white_color"></span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto header_font">
              <li className="nav-item dropdown">
                <NavLink href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">EN STOCK</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  white_color" href="#">PREVENTAS</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink href="#" className="nav-link dropdown-toggle white_color" data-toggle="dropdown">PLAYERAS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  white_color" href="#">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  white_color" href="#">CONTACTO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  white_color" href="#">MI CUENTA</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header_bs;