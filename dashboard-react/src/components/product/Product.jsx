import './product.css'
import ReactDOM from 'react-dom'
import globe from '../../assets/globe.png'

export const Product = ({ product }) => {
  return (
    <article className="course--card" key={product.id}>
      <img
        className="course--card__photo"
        src={product.imageUrl}
        alt="Imagen de Curso"
      />
      <div className='course-cardInside'>
      <h3>{product.title}</h3>
      <h4>{product.subtitle}</h4>
      <small> <b>Creado por</b>: {product.users.name}</small>

      <p className='course--description'>{product.description}</p>
      
      <div className="course--card__rating">

        <div className='course--card__language'> <img className='globeIcon' src={globe} alt="globeIcon" /><span> {product.languages.name}</span></div>
      </div>
        <span className='productList--card__tagTitle' style= {{
      border: `1px solid ${product.categories?.borderColor}`,
      backgroundColor: `${product.categories?.backgroundColor}`,
    }}>{product.categories.name} / {product.subcategories.name}</span>
    
      
      <p className="course--card__price">${product.price}</p>
      </div>
      <div className="course--cardDown">
        {/* Podés agregar botones u otra información */}
      </div>
    </article>
  );
};

