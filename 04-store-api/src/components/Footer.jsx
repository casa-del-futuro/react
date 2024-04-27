import React, { useContext } from 'react'
import { FilterContext } from '../context/Filters'

const Footer = () => {

  const {filters} = useContext(FilterContext)
  return (
    <div>
      {JSON.stringify(filters, null,2)}
    </div>
  )
}

export default Footer