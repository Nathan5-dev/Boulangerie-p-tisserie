import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/header.jsx';
import Home from 'pages/home.jsx';
import Products from 'pages/product.jsx';
import Register from 'pages/register.jsx';
import Login from 'pages/login.jsx';
import Cart from 'pages/cart.jsx';
import Confirmation from 'pages/confirmation.jsx';
import AdminDashboard from 'pages/AdminDashboard.jsx';
import { CartProvider } from 'context/CartContex.jsx';
import { AuthProvider } from 'context/AuthContext.jsx';
import 'App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="pages/home.jsx " element={<Home />}/>
                <Route path="pages/product.jsx" element={<Products />} />
                <Route path="pages/register.jsx" element={<Register />} />
                <Route path="pages/login.jsx" element={<Login />} />
                <Route path="pages/cart.jsx" element={<Cart />} />
                <Route path="pages/confirmation.jsx" element={<Confirmation />} />
                <Route path="pages/AdminDashboard.jsx" element={<AdminDashboard />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;