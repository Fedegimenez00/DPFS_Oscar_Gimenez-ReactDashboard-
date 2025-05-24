import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


export const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((e) => console.error(e))
      
    }, [])
    
  return (
    <div>
        <h3>Catálogo de productos</h3>
    {products ? (
        <ul>
            {products.map(p => (
              <Link key={p.id} to={`/products/detail/${p.id}`}>
          <div>
                <h4>{p.title}</h4>
                <p>{p.price}</p>
                <img src={p.imageUrl} alt="imagenDelProducto" />
           </div>
           </Link> ))}
        </ul> 
     ):( 
        <p>Cargando...</p>
   )}
    </div>
  )
}
