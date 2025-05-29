import { Route, Routes } from "react-router-dom";
import { Catalog } from "../catalog/Catalog";
import { ProductDetail } from '../productDetail/ProductDetail'
import { LastProduct } from '../lastProduct/LastProduct'
import { Categories } from '../categories/Categories'
import { Counter } from '../counter/Counter'
import { CategoriesCatalog } from '../categoriesCatalog/CategoriesCatalog'
import { Users } from '../users/Users'
import { UserProfile } from '../userProfile/UserProfile'



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

        <Route path="/categories/:id" element={
          <>   
          <CategoriesCatalog/>
          </>


        }/>
         <Route path="/categories" element={
          <>   
          <Categories/>
          </>
          
        }/>

         <Route path="/users" element={
          <>   
          <Users/>
          </>
          
        }/>

        <Route path="/users/profile/:id" element={
          <>   
          <UserProfile/>
          </>
        }/>
        
      </Routes>

      
    
    </div>
  )
}
