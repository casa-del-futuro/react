import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { FilterProvider } from './context/Filters'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product.jsx'
import { CartProvider } from './context/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <CartProvider>
                    <FilterProvider>
                        <App />
                    </FilterProvider>
                </CartProvider>
            } />
            <Route path="/product/:idProduct" element={<Product />} />
        </Routes>
    </BrowserRouter>
)
