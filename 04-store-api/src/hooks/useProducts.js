const URL_BASE = "https://dummyjson.com/products/"
import { useState } from 'react'

export const useProducts = () => {
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

    // Fetch de products
    const getProducts = async (limit=12 , skip=0) => {
      const res = await fetch(URL_BASE + `?limit=${limit}&skip=${skip}`)
      const data = await res.json()
      setTotal(data.total)
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


  return{ total, products, product, getProducts, getProduct ,getProductsByName}
}