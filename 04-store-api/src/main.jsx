import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { FilterProvider } from './context/Filters'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product.jsx'
import { CartProvider } from './context/Cart.jsx'
import { ProductProvider } from './context/Product.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <FilterProvider>
                            <App />
                        </FilterProvider>
                    } />
                    <Route path="/product/:idProduct" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </ProductProvider>
    </CartProvider>
)
