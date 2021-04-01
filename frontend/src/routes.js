import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';

import React from 'react';
import Favorites from './pages/Favorites';
import Products from './pages/Products';
import Novidades from './pages/Novidades';
import Home from './pages/Home';
import Header from './components/Header';
import Product from './pages/Product';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/novidades" component={Novidades} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/product/:slug" component={Product} />
    </Switch>

  </BrowserRouter>
);

export default Routes;
