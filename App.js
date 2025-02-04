import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import CartWidget from './components/CartWidget';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <CartWidget />
        <Switch>
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/" component={Catalog} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
