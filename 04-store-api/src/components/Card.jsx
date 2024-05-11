import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/Cart"

const Card = ({ product }) => {

  const { addProduct, deleteProduct } = useContext(CartContext)

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
          <h3><i>{price}.<small>00</small> $</i></h3>

        </div>
        <div className="buttons">
          <Link to={"/product/" + id}>Ver Producto</Link>
          <button className="CartBtn" onClick={() => addProduct(product)}>
            <span className="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </span>
            <p className="text">Add to Cart</p>
          </button>
        </div>
      </span>
    </li>
  )
}

export default Card