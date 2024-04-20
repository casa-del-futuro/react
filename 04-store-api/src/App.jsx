import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [products, setProducts] = useState([])

  const getProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    setProducts(data.products)
  }

  const renderProduct = () => {
    return (
      <ul>
        {products.map(({ id, title, description, images }) => {
          return (
            <Card key={id} title={title} description={description} images={images} />
          )
        })}
      </ul>
    )
  }


  useEffect(() => {
    getProduct()
  }, [])


  return (
    <>
      {renderProduct()}
    </>
  )
}

export default App
