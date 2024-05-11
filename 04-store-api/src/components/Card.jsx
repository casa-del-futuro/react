import { Link } from "react-router-dom"

const Card = ({ product }) => {

  const { id, title, description, images, price, category } = product

  const customTitle = title.length > 25 ? (title.slice(0, 25) + "...") : title
  const customDescription = description.length > 45 ? (description.slice(0, 45) + "...") : description


  return (
    <li className="card">
      <div>
        <img src={images[0]} alt={description} />
        <div className="card-content">
          <h4 className="overflow" title={title} >{customTitle}</h4>

          <p><i>{category}</i></p>
        </div>

      </div>
      <span>
        <div className="card-content">
          <p className="overflow" title={description}>{customDescription}</p>
          <h3><i>{price}.<small>0{Math.round(Math.random()*4)}</small> $</i></h3>

        </div>
        <div className="buttons">
          <Link to={"/product/" + id}>Ver Producto</Link>
          <button>🛒</button>
        </div>
      </span>
    </li>
  )
}

export default Card