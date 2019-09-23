import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './styles/App.scss';

import Header_bs from './components/Header_bs/Header_bs';
import Footer_bs from './components/Footer_bs/Footer_bs';
import Home from './components/Secciones/Home/Home';
import Cart from './components/Secciones/Cart/Cart';
import StockList from './components/Secciones/Stock/StockList/StockList';
import StockDetail from './components/Secciones/Stock/StockDetail/StockDetail';
import Account from './components/Secciones/Account/Account';
import Questions from './components/Secciones/Questions/Questions';
import Contact from './components/Secciones/Contact/Contact';




function App() {
  return (
    <div className="App">

      <Header_bs/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/stock" exact component={StockList}/>
        <Route path="/stock/:id" exact component={StockDetail}/>
        <Route path="/account" exact component={Account}/>
        <Route path="/questions" exact component={Questions}/>
        <Route path="/contact" exact component={Contact}/>
       
      </Switch>

      
      <Footer_bs />

    </div>
  );
}

export default App;
