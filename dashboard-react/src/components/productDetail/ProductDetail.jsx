import { useState, useEffect } from 'react';
import { Product } from '../product/Product';
import { useParams} from 'react-router-dom';


export const ProductDetail = () => {
 
    const [product, setProducts] = useState(null);
    const {id} = useParams();
        useEffect(() => {
          fetch('http://localhost:3000/api/products/detail/' + id)
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((e) => console.error(e))
          
        }, [])
        
    return (
        <div>
        <h3 className="section-title">Detalle de Producto</h3>
    {product ? ( <Product product = {product}/>
    ) : 
       ( <p>Cargando...</p> )
   }
    </div>
  )
}
