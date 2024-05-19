import { useSearchParams } from 'react-router-dom'
import { FilterContext } from '../context/Filters'
import Card from './Card'
import { useContext, useEffect, useState } from 'react'
import "./styles/products.css"
import Pagination from '@mui/material/Pagination';
import { ProductContext } from '../context/Product'




export default function Products() {
  const [searchParams, setSerchParams] = useSearchParams()
  const { products, getProducts, getProductsByName, total } = useContext(ProductContext)
  const { filterProducts } = useContext(FilterContext)

  const search = searchParams.get("search") ?? ""

  useEffect(() => {
    getProducts()
  }, [])


  const handleSearchParams = (e) => {
    setSerchParams({ search: e.target.value })
    getProductsByName(search)
  }

  const filteredProducts = filterProducts(products)

    /* PAGINATION */
    const [page, setPage] = useState(1);
    const skip = (page - 1) * 12
    const totalProducts = Math.round(total / 12) + 1
    const handleChange = ( _, value ) => {
      setPage(value);
    };

  useEffect(() => {
    getProducts(12, skip)
  },[page])
  

  return (
    <>
      <div className="searchBar">
        <input value={search} type="text" onChange={handleSearchParams} onBlur={handleSearchParams} />
        <button>🔍</button>
      </div>
      {filteredProducts.length != 0 && 
      <>
      <p>Total de productos: {total}</p>
      <p>Página: {page}</p>
      <Pagination count={totalProducts} page={page} onChange={handleChange} />
      
      </>
      }
      <ul className="products">
        {filteredProducts.length != 0 ? filteredProducts.map((product) => {
          return (
            <Card key={product.id} product={product} />
          )
        }) : <h2>NO HAY PRODUCTS CON ESTOS FILTROS</h2>}
      </ul>
    </>
  )
}


