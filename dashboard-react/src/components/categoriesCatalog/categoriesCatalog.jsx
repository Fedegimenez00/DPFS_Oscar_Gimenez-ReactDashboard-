import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import defaultWallpaper from '../../assets/defaultWallpaper.png';
import './categoriesCatalog.css'



export const CategoriesCatalog = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCategory(data.category);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
  <div>
   <h3 className="section-title">{category?.name || 'Catálogo por categoría'}</h3>
    <img
      className="categoriesWallpaper"
      src={category?.catalogWallpaperUrl || defaultWallpaper}
      alt="Fondo de catálogo"
    />
    {products.length ? (
      <ul className="ulCatalog">
        {products.map((product) => (
          <Link key={product.id} to={`/products/detail/${product.id}`}>
            <article className="catalog--courseCard">
              <div className="catalog--courseCardInside">
                <img  src={product.imageUrl} alt="imagenDelProducto" />
                <div className="bodyCard__inside">
                  <div className="bodyCard__UpperInside">
                    <div className="bodyCard__titles">
                      <div className="bodyCard__titlesInside">
                        <h3>{product.title}</h3>
                        <p className="bodyCard__author">por {product.users?.name}</p>
                        <p className="bodyCard__insideDescription">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </ul>
    ) : (
      <p className="loading-message">Cargando cursos...</p>
    )}
  </div>
);

};

