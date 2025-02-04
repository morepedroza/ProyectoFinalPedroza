import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
  ];

  return (
    <div>
      <h2>Catalogo de Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;

