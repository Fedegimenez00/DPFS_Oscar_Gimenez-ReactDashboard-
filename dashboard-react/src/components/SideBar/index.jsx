import logo from '../../assets/Logo_Completo.png';
import './sidebar.css';

export const SideBar = () => {
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className='links'>
            <li><a href="">Catálogo</a></li>
            <li><a href="">Último Producto</a></li>
            <li><a href="">Categorias</a></li>
            <li><a href="">Total de Productos</a></li>
        </ul>
    </div>
  )
}
