import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import Header_bs from './components/Header_bs/Header_bs';
import Footer_bs from './components/Footer_bs/Footer_bs';
import Slider_bs from './components/Index_bs/Slider_bs/Slider_bs';
import Carts_bs from './components/Index_bs/Carts_bs/Carts_bs';
import Home from './components/Secciones/Home/Home';
import Cart from './components/Secciones/Cart/Cart';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>


      <Header_bs/>
      <Slider_bs />
      <Carts_bs />
      <Footer_bs />




    </div>
  );
}

export default App;
