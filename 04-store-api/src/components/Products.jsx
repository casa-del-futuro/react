import Card from './Card'


export default function Products({ products }) {
  return (
    <ul>
      {products.length != 0 ? products.map((product) => {
        return (
          <Card key={product.id} product={product} />
        )
      }): <h2>NO HAY PRODUCTS CON ESTOS FILTROS</h2> }
    </ul>
  )
}


