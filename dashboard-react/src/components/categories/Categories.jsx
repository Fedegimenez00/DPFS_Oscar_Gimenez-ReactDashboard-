import { useState, useEffect } from "react";


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
          <li key={index}>
            <h4>{c.name}</h4>
            <img src={c.iconUrl} alt="Icono de la categoría" />
          </li>
        ))}
      </ul>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
);

}
