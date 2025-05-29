import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
    {category ? (
      <>
        <h3 className="section-title"> {category.name}</h3>
        <img
        className="categoriesWallpaper"
          src={category.catalogWallpaperUrl}
          alt="Fondo de catálogo"
        />
      </>
    ) : (
      <p>Cargando categoría...</p>
    )}

    {products.length ? (
      <ul className="ulCatalog">
        {products.map((p) => (
          <Link key={p.id} to={`/products/detail/${p.id}`}>
            <article className="cart--bodyCard">
              <div className="cart--cardInside">
                <img  src={p.imageUrl} alt="imagenDelProducto" />
                <div className="cart--bodyCard__inside">
                  <div className="cart--bodyCard__UpperInside">
                    <div className="bodyCard__titles">
                      <div className="bodyCard__titlesInside">
                        <h3>{p.title}</h3>
                        <p className="bodyCard__author">por {p.users?.name}</p>
                        <p className="cart--bodyCard__insideDescription">
                          {p.description}
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
      <p>No hay productos disponibles.</p>
    )}
  </div>
);

};

