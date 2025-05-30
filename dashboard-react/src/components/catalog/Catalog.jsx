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
    {products ? (
        <ul className='ulCatalog'>
            {products.map(p => (
              <Link key={p.id} to={`/products/detail/${p.id}`}>
          <article className="catalog--courseCard">
          <div class="catalog--courseCardInside">
           <img src={p.imageUrl} alt="imagenDelProducto" />
  <div class="bodyCard__inside">
            <div class="bodyCard__UpperInside">
            <div class="bodyCard__titles">
                <div class="bodyCard__titlesInside">
            <h3>{p.title}</h3>
                        <p className='bodyCard__author'>por {p["users.name"]}</p>

            <p className='bodyCard__insideDescription'>{p.description}</p>
            <span className='productList--card__tagTitle' style= {{
      border: `1px solid ${p["categories.borderColor"]}`,
      backgroundColor: `${p["categories.backgroundColor"]}`,
    }}>{p["categories.name"]}</span>
            
        </div>
        

        </div>
        </div>
         
  
        </div>
           </div>
           </article>
           </Link> ))}
        </ul> 
     ):( 
        <p>Cargando...</p>
   )}
    </div>
  )
}
