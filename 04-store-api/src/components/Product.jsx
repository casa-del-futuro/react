import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { CartContext } from "../context/Cart"
import Layout from "./Layout"
import Rating from '@mui/material/Rating';
import { useState } from 'react'
import { ProductContext } from "../context/Product"

const Product = () => {

  const {idProduct} = useParams()
  const {product, getProduct} = useContext(ProductContext)
  const {addProduct} = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(()=>{
    getProduct(idProduct)
  },[])

  const {title, description, images, price, category} = product

  const [value, setValue] = useState(2)

  if (!product) {
    return <div>No se encuentra el usuario</div>;
  }


  return (
    <Layout>
      <div>
        <button onClick={()=>navigate("/")}>home</button>
      </div>
      <img src={images? images[0] : ""} alt={description} />
      <div>

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
      <div>
        <strong>{title} - {price}$</strong>
        <p><i>{category}</i></p>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={() => addProduct(product)}>🛒</button>
      </div>
    </Layout>
  )
}

export default Product