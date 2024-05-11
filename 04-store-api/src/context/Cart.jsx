import { createContext } from "react"
import { useCart } from "../hooks/useCart"


/* 1. crear el contexto */
export const CartContext = createContext()

/* 2. proveer el contexto */

export const CartProvider = ({children}) => {
  const  {cart, addProduct, deleteProduct, clearCart, calcTotal, total} = useCart()

  return(
    <CartContext.Provider value={{cart, addProduct, deleteProduct, clearCart, calcTotal, total}}>
      {children}
    </CartContext.Provider>
  )
}
