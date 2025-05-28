import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


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
    <h3>Listado de Categorías</h3>
  {categories ? (
  <ul>
    {categories.map((c, index) => (
        <Link key={c.id} to={`/categories/${c.id}`}>
      <article key={index} className="categoriesMain--Fundamental">
        <div className="categories--cardDownInside__Inside--fundamental">

          <div className="categories--cardInsideFirst">
            <img src={c.iconUrl} alt="Icono de la categoría" />
            <div className="categories--cardInsideFirst__down">
              <h4>{c.name}</h4>
            </div>
            <hr className="subCategories--cardLine" />
          </div>


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
