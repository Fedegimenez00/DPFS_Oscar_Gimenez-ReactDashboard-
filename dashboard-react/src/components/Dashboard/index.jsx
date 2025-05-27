import { Route, Routes } from "react-router-dom";
import { Catalog } from "../catalog/Catalog";
import { ProductDetail } from '../productDetail/ProductDetail'
import { LastProduct } from '../lastProduct/LastProduct'
import { Categories } from '../categories/Categories'
import { Counter } from '../counter/Counter'
import { categoriesCatalog } from "../categoriesCatalog/categoriesCatalog"
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Routes>
        <Route path="/catalog" element={
          <>        
          <Catalog/>
          </>
        }/>

        <Route path="/counter" element={
          <>   
          <Counter/>
          </>
        }/>
       <Route path="/products/detail/:id" element={
          <>   
          <ProductDetail/>
          </>
        }/>

        <Route path="/last-product" element={
          <>   
          <LastProduct/>
          </>
        }/>

        <Route path="/categories/3" element={
          <>   
          <categoriesCatalog/>
          </>
          
        }/>
         <Route path="/categories" element={
          <>   
          <Categories/>
          </>
          
        }/>
        
      </Routes>

      
    
    </div>
  )
}
