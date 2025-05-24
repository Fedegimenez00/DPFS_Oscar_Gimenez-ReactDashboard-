
export const Product = ({ product }) => {
  return (
    <div key={product.id}>
    <h4>{product.title}</h4>
    <p>{product.price}</p>
      <img src={product.imageUrl} alt="imagenDelProducto"/>
    </div>
  )
}
