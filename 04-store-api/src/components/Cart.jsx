import "./styles/cart.css"
import { useContext, useState } from "react"
import { CartContext } from "../context/Cart"


export const ItemCart = ({ product }) => {
  const { deleteProduct } = useContext(CartContext)
  return (
    <li>
      <img src={product.images ? product.images[0] : ""} alt={product.description} />
      <div>
        <h4>{product.title}</h4>
        <p><strong>{product.price}. 00</strong>$</p>
        <p>{"cantidad: " + product.quantity}</p>
        <button onClick={() => deleteProduct(product)} style={{ background: "red" }}>Eliminar producto</button>
      </div>
    </li>
  )
}

export const Cart = () => {

  const { cart, total, clearCart } = useContext(CartContext)

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <button className="cart-button" onClick={handleShowCart}>🛒</button>
      <section className="cart-section" style={{ display: showCart ? "block" : "none" }}>
        <button onClick={handleShowCart}>❌</button>
        <ul>
          {cart.length == 0
            ? <li>Agrega algo al carrito</li>
            : cart.map(product => {
              return (
                <ItemCart key={product.description} product={product} />
              )
            })}
        </ul>
        {cart.length > 0 &&
          <>
            <h2>Total a pagar : {total}. 00 $</h2>
            <button onClick={clearCart} style={{ background: "red" }} >Borrar todo</button>
          </>
        }

      </section>
    </>
  )
}

