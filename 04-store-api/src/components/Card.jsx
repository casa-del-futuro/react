import { Link } from "react-router-dom"

const Card = ({  product }) => {

  const {id,title, description, images, price, category} = product


  return (
    <li>
      <img src={images[0]} alt={description} />
      <div>
        <strong>{title} - {price}$</strong>
        <p><i>{category}</i></p>
        <p>{description}</p>
      </div>
      <div>
        <button><Link to={"/product/"+id}>Ver Producto</Link></button>
        <button>🛒</button>
      </div>
    </li>
  )
}

export default Card