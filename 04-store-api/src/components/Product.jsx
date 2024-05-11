import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import { useEffect } from "react"

const Product = () => {

  const {idProduct} = useParams()
  const {product, getProduct} = useProducts()

  useEffect(()=>{
    getProduct(idProduct)
  },[])

  const {title, description, images, price, category} = product

  console.log(product);

  if (!product) {
    return <div>No se encuentra el usuario</div>;
  }

  return (
    <>
      <img src={images? images[0] : ""} alt={description} />
      <div>
        <strong>{title} - {price}$</strong>
        <p><i>{category}</i></p>
        <p>{description}</p>
      </div>
      <div>
        <button>🛒</button>
      </div>
    </>
  )
}

export default Product