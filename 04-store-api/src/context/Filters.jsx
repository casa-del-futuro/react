import { createContext, useState } from "react";


// 1. CREAR EL CONTEXTO
export const FilterContext = createContext()

// 2. PROVEER EL CONTEXTO
export const FilterProvider = ({children}) => {

  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all"
  })

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
  


  return(
    <FilterContext.Provider value={{filters, filterProducts, setFilters}} >
      {children}
    </FilterContext.Provider>
  )
}
