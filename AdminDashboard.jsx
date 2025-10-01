// pages/AdminDashboard.js - Tableau de bord administrateur
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminProducts from '../components/AdminProducts';
import AdminOrders from '../components/AdminOrders';
import AdminStats from '../components/AdminStats';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user || user.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          Accès réservé aux administrateurs
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-6">Administration</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/admin/products" 
                  className={`block px-4 py-2 rounded ${location.pathname === '/admin/products' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'}`}
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/orders" 
                  className={`block px-4 py-2 rounded ${location.pathname === '/admin/orders' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'}`}
                >
                  Commandes
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/stats" 
                  className={`block px-4 py-2 rounded ${location.pathname === '/admin/stats' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'}`}
                >
                  Statistiques
                </Link>
              </li>
              <li>
                <button 
                  onClick={logout}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-red-600"
                >
                  Déconnexion
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="stats" element={<AdminStats />} />
            <Route path="/" element={<AdminStats />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;