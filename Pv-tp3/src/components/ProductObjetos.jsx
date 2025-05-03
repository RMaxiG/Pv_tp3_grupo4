import { useState, useEffect } from "react";
//ejercicio adicional*_*
const ProductObjetos = () => {
  const [productos, setProductos] = useState([
    { descripcion: "Serum", precio: 17.90 },
    { descripcion: "Hidratante", precio: 48.5 },
    { descripcion: "Gel de limpieza", precio: 125 },
    { descripcion: "Balsamo", precio: 27.5 },
    { descripcion: "Mascarilla", precio: 7.90 }
  ]);

  // 1. Productos mayores a $20
  const productosCaros = productos.filter(p => p.precio > 20);

  // 2. Productos con IVA
  const productosConIVA = productos.map(p => ({
    descripcion: p.descripcion,
    precio: (p.precio * 1.21).toFixed(2)
  }));

  // 3. Productos ordenados por precio
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  // 4. Agregar producto
  const agregarProducto = () => {
    const nuevo = { descripcion: "Protector Solar", precio: 59000.90 };
    setProductos([...productos, nuevo]);
  };

  // 5. Eliminar producto más barato
  const eliminarMasBarato = () => {
    const precioMin = Math.min(...productos.map(p => p.precio));
    const nuevoArray = productos.filter(p => p.precio !== precioMin);
    setProductos(nuevoArray);
  };

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>
            Producto: {p.descripcion} - Precio: ${p.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <button onClick={agregarProducto}>Agregar Protector Solar</button>
      <button onClick={eliminarMasBarato} style={{ marginLeft: "1rem" }}>
        Eliminar Producto más Barato
      </button>

      <h3>Productos con precio mayor a $20</h3>
      <ul>
        {productosCaros.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio.toFixed(2)}</li>
        ))}
      </ul>

      <h3>Productos con IVA (21%)</h3>
      <ul>
        {productosConIVA.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3>Productos ordenados por precio</h3>
      <ul>
        {productosOrdenados.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductObjetos
/*
no sabria como correrlo en la misma pagina, ya que no contienen las mismas insttrucciones

import React from 'react';
import ProductObjetos from './ProductObjetos';

const App = () => (
  <div>
    <h1>GESTION DE DATOS DE UN ARRAY DE OBJETOS</h1>
    <ProductObjetos/>
  </div>
);

export default App;

*/