import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_Completo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faClock, faLayerGroup, faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__links">
          <li><Link to="/users"> <FontAwesomeIcon icon={faUser} /> Usuarios</Link></li>
          <li><Link to="/catalog"> <FontAwesomeIcon icon={faBox} /> Catálogo</Link></li>
          <li><Link to="/last-product"> <FontAwesomeIcon icon={faClock} /> Último Producto</Link></li>
          <li><Link to="/categories"> <FontAwesomeIcon icon={faLayerGroup} /> Categorías</Link></li>
          <li><Link to="/counter"> <FontAwesomeIcon icon={faChartBar} /> Contador</Link></li>
        </ul>
      </nav>
    </div>
  );
};
