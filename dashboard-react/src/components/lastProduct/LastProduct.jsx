import { useState, useEffect } from 'react'
import { Product } from '../product/Product'


export const LastProduct = () => {
 
    const [product, setProducts] = useState(null); //El useState fomenta el estado de carga <p> Cargando...</p>
    
        useEffect(() => {
          fetch('http://localhost:3000/api/products/last-product')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((e) => console.error(e))
          
        }, [])
        
    return (
        <div>
        <h3>Último Producto Agregado</h3>
    {product ? ( <Product product = {product}/>
    ) : 
       ( <p>Cargando...</p> )
   }
    </div>
  )
}
