import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import { useContext } from 'react'
import { FilterContext } from './context/Filters'


function App() {
  const [products, setProducts] = useState([])
/*   const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all"
  }) */

  const {filterProducts} = useContext(FilterContext)


  // Fetch de product
  const getProduct = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProduct()
  }, [])


  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Footer />
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
