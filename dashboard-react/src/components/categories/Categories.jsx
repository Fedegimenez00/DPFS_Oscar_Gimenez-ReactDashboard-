import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './categories.css'


export const Categories = () => {
    const [categories, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/categories')
      .then((res) => res.json())
      .then((data) => setProducts(data.categories))
      .catch((e) => console.error(e))
      
    }, [])
    
  return (
  <div>
    <h3 className="section-title">Listado de Categorías</h3>
  {categories ? (
  <ul>
    {categories.map((c, index) => (
        <Link key={c.id} to={`/categories/${c.id}`}>
      <article key={index} className="categoriesCard"
      style= {{
      border: `1px solid ${c?.borderColor}`,
      background: `${c?.backgroundColor}`,
    }}>
        <div className="categories--cardDownInside__container">

          <div className="categories--cardInsideFirst">
            <img className="categoriesCard--icon" src={c.iconUrl} alt="Icono de la categoría" />
            <div className="categories--cardInsideFirst__down">
              <h4>{c.name}</h4>
            </div>
          </div>
            <hr className="subCategories--cardLine" />
            <p className="categoriesDescription">{c.description}</p>

        </div>
      </article>
       </Link>
    ))}
  </ul>
) : (
  <p>Cargando...</p>
)}

  </div>
);

}
