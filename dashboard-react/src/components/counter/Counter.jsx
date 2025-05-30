import { useState, useEffect } from "react";
import './counter.css'

export const Counter = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState(null);

   const fetchData = async (endpoint, setData) => {
    let res = await fetch(endpoint);
    let data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData("http://localhost:3000/api/products", setProducts);
    fetchData("http://localhost:3000/api/users", setUsers);
    fetchData("http://localhost:3000/api/categories", setCategories);
  }, []);
    

    
  return (
    <div>
    <h3 className="section-title">Elementos Totales</h3>
    {products && categories && users ? (
        <>
     <div>
        <div className="stats-container">
  <div className="stat-card">
    <h4>Productos</h4>
    <p>{products.count}</p>
  </div>
  <div className="stat-card">
    <h4>Usuarios</h4>
    <p>{users.count}</p>
  </div>
  <div className="stat-card">
    <h4>Categorías</h4>
    <p>{categories.count}</p>
  </div>
</div>
         
     </div>
     

        
        
        </>
     ):( 
        <p className='loading-message'>Cargando contador...</p>
   )}
    </div>
  )
}
