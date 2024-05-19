import { createContext, useState } from "react"
import { useProducts } from "../hooks/useProducts"

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

  const { products, product, getProducts, getProduct ,getProductsByName , total} = useProducts()

  return(
    <ProductContext.Provider value={{ products, product, getProducts, getProduct ,getProductsByName, total }}>
      {children}
    </ProductContext.Provider>
  )
}