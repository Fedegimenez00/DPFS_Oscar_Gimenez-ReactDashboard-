import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
          <h3>Catálogo de productos: {category.name}</h3>
          <img
            src={category.catalogWallpaperUrl}
            alt="Fondo de catálogo"
            style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
          />
        </>
      ) : (
        <p>Cargando categoría...</p>
      )}

      {products.length ? (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <a href={`/products/detail/${p.id}`}>
                <div>
                  <h4>{p.title}</h4>
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

