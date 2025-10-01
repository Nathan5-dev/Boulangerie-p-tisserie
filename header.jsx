import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const cartItemsCount = getCartItemsCount();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-600">Le Grenier</Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-amber-600">Accueil</Link>
          <Link to="/products" className="text-gray-700 hover:text-amber-600">Produits</Link>
          
          {user ? (
            <>
              {isAdmin() && (
                <Link to="/admin" className="text-gray-700 hover:text-amber-600">Admin</Link>
              )}
              <button onClick={logout} className="text-gray-700 hover:text-amber-600">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-amber-600">Connexion</Link>
              <Link to="/register" className="text-gray-700 hover:text-amber-600">Inscription</Link>
            </>
          )}
          
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;