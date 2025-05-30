import './product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const Product = ({ product }) => {
  return (
    <article className="course--card" key={product.id}>
  <img
    className="course--card__photo"
    src={product.imageUrl}
    alt={`Imagen de ${product.title}`}
  />

  <div className="course-cardInside">
    <h3>{product.title}</h3>
    <h4>{product.subtitle}</h4>
    <small><strong>Creado por:</strong> {product.users.name}</small>

    <p className="course--description">{product.description}</p>

    <div className="course--card__meta">
      <div className="course--card__language">
        <FontAwesomeIcon icon={faGlobe} />
        <span>{product.languages.name}</span>
      </div>

      <span
        className="productList--card__tagTitle"
        style={{
          border: `1px solid ${product.categories?.borderColor}`,
          backgroundColor: `${product.categories?.backgroundColor}`,
        }}
      >
        {product.categories.name} / {product.subcategories.name}
      </span>
    </div>

    <p className="course--card__price">${product.price}</p>
  </div>

  <div className="course--cardDown">
    {/* Botones o acciones adicionales aquí */}
  </div>
</article>

  );
};

