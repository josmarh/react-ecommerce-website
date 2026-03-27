import { Routes, Route, redirect } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
