import { useContext, useState } from 'react'
import { FilterContext } from '../context/Filters'

const Filters = () => {

  // consumir el contexto
  const {filters, setFilters} = useContext(FilterContext)

  const handleChangeMinPrice = (e) => {
    setFilters( (prevState) => {
      return( { ...prevState, minPrice : e.target.value} )
    }  )
  }

  const handleChangeCategory = (e) => {
    setFilters( (prevState) => {
      return( { ...prevState, category : e.target.value} )
    }  )
  }

  return (
    <section className="filters">
      <div className="filters-minPrice">
        <label htmlFor="price">A partir de: </label>
        <input
          type="range"
          id='price'
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <strong>{filters.minPrice}</strong>
      </div>

      <div className="filters-categoria">
        <label htmlFor="category">Categoría</label>
        <select name="category" id="category" onChange={handleChangeCategory} >
          <option value="all">Todos</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Perfumes</option>
          <option value="laptops">Computadoras</option>
        </select>
      </div>
    </section>
  )
}

export default Filters