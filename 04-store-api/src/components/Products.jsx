import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../App'
import { FilterContext } from '../context/Filters'
import Card from './Card'
import { useContext, useEffect } from 'react'


export default function Products() {
  const [searchParams, setSerchParams] = useSearchParams()
  const { products, getProducts, getProductsByName } = useProducts([])
  const { filterProducts } = useContext(FilterContext)
  
  const search = searchParams.get("search") ?? ""

  useEffect(() => {
    getProducts()
  }, [])


  const handleSearchParams = (e) => {
    setSerchParams({search: e.target.value})
    getProductsByName(search)
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
    <input value={search} type="text" onChange={handleSearchParams} />
      <ul>
        {filteredProducts.length != 0 ? filteredProducts.map((product) => {
          return (
            <Card key={product.id} product={product} />
          )
        }) : <h2>NO HAY PRODUCTS CON ESTOS FILTROS</h2>}
      </ul>
    </>
  )
}


