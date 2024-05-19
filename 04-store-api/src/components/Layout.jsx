import React from 'react'
import { Cart } from './Cart'

const Layout = ({children}) => {
  return (
    <>
      <h1> Store API 🛒 </h1>
      <Cart />
      {children}
    </>
  )
}

export default Layout