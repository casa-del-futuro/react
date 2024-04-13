import './App.css'
import RenderProduct from './components/RenderProduct'

const PRODUCTS = [
  {
    name: "Milk",
    category: "Dairy",
    description: "Fresh milk",
    price: 2.99,
    stock: true,
    code: 12345
  },
  {
    name: "Bread",
    category: "Bakery",
    description: "Whole wheat bread",
    price: 1.99,
    stock: true,
    code: 67890
  },
  {
    name: "Eggs",
    category: "Dairy",
    description: "Large eggs",
    price: 3.49,
    stock: false,
    code: 13579
  },
  {
    name: "Bananas",
    category: "Produce",
    description: "Yellow bananas",
    price: 0.79,
    stock: true,
    code: 24680
  },
  {
    name: "Chicken",
    category: "Meat",
    description: "Boneless skinless chicken breasts",
    price: 4.99,
    stock: false,
    code: 11223
  },
  {
    name: "Cereal",
    category: "Breakfast",
    description: "Whole grain cereal",
    price: 2.49,
    stock: true,
    code: 33445
  },
  {
    name: "Apples",
    category: "Produce",
    description: "Red apples",
    price: 0.99,
    stock: false,
    code: 55667
  },
  {
    name: "Pasta",
    category: "Pantry",
    description: "Spaghetti pasta",
    price: 1.29,
    stock: true,
    code: 77889
  },
  {
    name: "Tomatoes",
    category: "Produce",
    description: "Ripe tomatoes",
    price: 1.49,
    stock: true,
    code: 99001
  },
  {
    name: "Yogurt",
    category: "Dairy",
    description: "Greek yogurt",
    price: 1.79,
    stock: true,
    code: 22334
  },
  {
    name: "Toilet Paper",
    category: "Household",
    description: "2-ply toilet paper",
    price: 5.99,
    stock: true,
    code: 44556
  },
  {
    name: "Shampoo",
    category: "Personal Care",
    description: "Moisturizing shampoo",
    price: 3.49,
    stock: true,
    code: 66778
  }
]

function App() {

  return (
    <>
      <h1>SUPERMERCADO🏬</h1>
      <RenderProduct listado={PRODUCTS} />
    </>
  )
}

export default App
