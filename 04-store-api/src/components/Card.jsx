const Card = ({  product }) => {

  const {title, description, images, price, category} = product

  return (
    <li>
      <img src={images[0]} alt={description} />
      <div>
        <strong>{title} - {price}$</strong>
        <p><i>{category}</i></p>
        <p>{description}</p>
      </div>
      <div>
        <button>🛒</button>
      </div>
    </li>
  )
}

export default Card