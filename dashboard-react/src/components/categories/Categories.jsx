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
    <ul className="categoriesList">
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id} className="categoriesCard__item">
            <Link className="categoriesCard__link" to={`/categories/${category.id}`}>
              <article
                className="categoriesCard"
                style={{
                  border: `1px solid ${category?.borderColor}`,
                  background: `${category?.backgroundColor}`,
                }}
              >
                <div className="categories--cardDownInside__container">
                  <div className="categories--cardInsideFirst">
                    <img
                      className="categoriesCard--icon"
                      src={category.iconUrl}
                      alt="Icono de la categoría"
                    />
                    <div className="categories--cardInsideFirst__down">
                      <h4>{category.name}</h4>
                    </div>
                  </div>
                  <hr className="subCategories--cardLine" />
                  <p className="categoriesDescription">{category.description}</p>
                </div>
              </article>
            </Link>
          </div>
        ))
      ) : (
        <p className="loading-message">Cargando categorias...</p>
      )}
    </ul>
  </div>
);

}
