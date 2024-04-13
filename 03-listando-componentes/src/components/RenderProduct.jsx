/* import por defaul */
/* import  ProductCard  from "./ProductCard" */

/* import por componentes */
import { ProductCard } from "./ProductCard"

const RenderProduct = ({ listado }) => {
  return (
    <section>
      {
        listado.map((product) => {
          return (
            <ProductCard key={product.code} product={product}  />
          )
        })
      }
    </section>
  )
}


export default RenderProduct