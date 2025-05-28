import './product.css'
import ReactDOM from 'react-dom'

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

      <p className='course--description'>{product.description}</p>
      <small><b>Creado por</b>: {product.users.name}</small>
      
      <div className="course--card__rating">
        <div className='productList--card__tagTitle' style= {{
      border: `1px solid ${product.categories?.borderColor}`,
      backgroundColor: `${product.categories?.backgroundColor}`,
    }}>{product.categories.name} / {product.subcategories.name}</div>
    <div><span> {product.languages.name}</span></div>
      </div>
      
      <p className="course--card__price">${product.price}</p>
      </div>
      <div className="course--cardDown">
        {/* Podés agregar botones u otra información */}
      </div>
    </article>
  );
};

