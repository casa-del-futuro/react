import { useEffect, useState } from "react"


export const useCart = () =>{

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addProduct = (product, quantity = 1) => {

    const existingProductIndex = cart.findIndex( cartProduct => cartProduct.id === product.id )
 
    if(existingProductIndex !== -1){
      setCart( prevCart => {
        const newCart = [...prevCart]
        newCart[existingProductIndex].quantity += quantity
        return newCart
      }) 
    }
    else{
      setCart( prevCart => [...prevCart, { ...product, quantity }])
    }
  }

  const deleteProduct = product => {
    setCart( prevCart => {
      const newCart = prevCart.filter( cartProduct => cartProduct.id != product.id )
      return newCart
    } )
    calcTotal()
  }

  const clearCart = () => {
    setCart([])
    setTotal(0)
  }

  const calcTotal = () => {
    setTotal(0)
    cart.map( product => {
      const totalProduct = product.price * product.quantity
      setTotal( prevTotal => prevTotal + totalProduct )
    } )
  }

  useEffect(()=>
    calcTotal()
    ,[cart]
  )

  return {cart, addProduct, deleteProduct, clearCart, calcTotal, total}
}