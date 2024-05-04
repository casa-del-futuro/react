import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'

const URL_BASE = "https://dummyjson.com/products/"

export const useProducts = () => {
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])

    // Fetch de products
    const getProducts = async () => {
      const res = await fetch(URL_BASE)
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


function App() {

  return (
    <>
      <Header />
      <Footer />
      <Products />
    </>
  )
}

export default App
