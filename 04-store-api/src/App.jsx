import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all"
  })

  // Fetch de product
  const getProduct = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProduct()
  }, [])


  // fx filtrado de products
  const filterProducts = (products) => {
    return(
      products.filter( (product) => {
        return(
          product.price >= filters.minPrice && 
          ( 
            filters.category == "all" || 
            product.category == filters.category
          ) 
        )
      } )
    )
  }

  const filteredProducts = filterProducts(products)
  

  return (
    <>
      <Header setFilters={setFilters} />
      <Footer filters={filters}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
