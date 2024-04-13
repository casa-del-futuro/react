export const ProductCard = ({product}) => {
  return (
    <article key={product.code}>
      <small>{product.category}</small>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <p className='bag'>{product.stock ? "Hay stock" : "No hay stock"}</p>
    </article>
  )
}

export const ProductCardSmall = ({product}) => {
  return (
    <article key={product.code}>
      <h2>{product.name}</h2>
      <small>{product.category}</small>
    </article>
  )
}
