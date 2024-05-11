const URL_BASE = "https://dummyjson.com/products/"
import { useState } from 'react'

export const useProducts = () => {
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])

    // Fetch de products
    const getProducts = async () => {
      const res = await fetch(URL_BASE + "?limit=0")
      const data = await res.json()
      setProducts(data.products)
    }

    // Fetch de product
    const getProduct = async (idProduct) => {
      const res = await fetch(URL_BASE + idProduct)
      const data = await res.json()
      setProduct(data)
    }

    // Fetch de product por nombre
    const getProductsByName = async (name) => {
      const res = await fetch(URL_BASE + "search?q=" + name)
      const data = await res.json()
      setProducts(data.products)
    }

  return{ products, product, getProducts, getProduct ,getProductsByName}
}