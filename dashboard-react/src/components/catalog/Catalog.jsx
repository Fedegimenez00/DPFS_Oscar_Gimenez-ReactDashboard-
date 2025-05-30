import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './catalog.css'


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
        <h3 className="section-title">Catálogo de Productos</h3>
    {products.length ? (
        <ul className='ulCatalog'>
            {products.map((product) => (
              <Link key={product.id} to={`/products/detail/${product.id}`}>
          <article className="catalog--courseCard">
          <div class="catalog--courseCardInside">
           <img src={product.imageUrl} alt="imagenDelProducto" />
  <div class="bodyCard__inside">
            <div class="bodyCard__UpperInside">
            <div class="bodyCard__titles">
                <div class="bodyCard__titlesInside">
            <h3>{product.title}</h3>
                        <p className='bodyCard__author'>por {product["users.name"]}</p>

            <p className='bodyCard__insideDescription'>{product.description}</p>
            <span className='productList--card__tagTitle' style= {{
      border: `1px solid ${product["categories.borderColor"]}`,
      backgroundColor: `${product["categories.backgroundColor"]}`,
    }}>{product["categories.name"]}</span>
            
        </div>
        

        </div>
        </div>
         
  
        </div>
           </div>
           </article>
           </Link> ))}
        </ul> 
     ):( 
      <p className="loading-message">Cargando cursos...</p>
   )}
    </div>
  )
}
