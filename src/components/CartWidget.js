import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div>
      <span>Carrito: {cart.length} items</span>
    </div>
  );
};

export default CartWidget;

