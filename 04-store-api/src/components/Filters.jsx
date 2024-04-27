import {useState} from 'react'

const Filters = ({setFilters, children}) => {

  const [ minPrice, setMinPrice ] = useState(0)

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
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
    <section>
      {children}
      <div>
        <label htmlFor="price">A partir de: </label>
        <input
          type="range"
          id='price'
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <strong>{minPrice}</strong>
      </div>

      <div>
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