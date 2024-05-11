import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'

const Footer = () => {


  const {cart,  clearCart, total } = useContext(CartContext)
  return (
    <div>
      {JSON.stringify(cart, null,2)}
      {total}
      <button onClick={clearCart} style={{background: "red"}} >Borrar todo</button>
    </div>
  )
}

export default Footer