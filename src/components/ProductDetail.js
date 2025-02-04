import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = { id: 1, name: 'Producto 1', price: 100 }; // Aquí cargarías los detalles del producto según el ID

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;

