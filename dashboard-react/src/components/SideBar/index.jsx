import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_Completo.png';
import './sidebar.css';

export const SideBar = () => {
  return (
    <div className='sidebar'>
       <Link to='/'> <img src={logo} alt="logo"/> </Link>
        <ul className='links'>
            <li><Link to="/catalog">Catálogo</Link></li>
            <li><Link to="/last-product">Último Producto</Link></li>
            <li><Link to="/categories">Categorias</Link></li>
            <li><Link to="/categories/3">Lista</Link></li>
            <li><Link to="/counter">Counter</Link></li>
        </ul>
    </div>
  )
}
