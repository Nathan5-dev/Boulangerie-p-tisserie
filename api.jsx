const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Fonction utilitaire pour les appels API
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erreur API');
    }

    return data;
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

// Produits
export const getProducts = () => apiRequest('/api/products');
export const getProduct = (id) => apiRequest(`/api/products/${id}`);
export const createProduct = (product) => apiRequest('/api/products', { method: 'POST', body: product });
export const updateProduct = (id, product) => apiRequest(`/api/products/${id}`, { method: 'PUT', body: product });
export const deleteProduct = (id) => apiRequest(`/api/products/${id}`, { method: 'DELETE' });

// Commandes
export const getOrders = () => apiRequest('/api/orders');
export const getOrder = (id) => apiRequest(`/api/orders/${id}`);
export const createOrder = (order) => apiRequest('/api/orders', { method: 'POST', body: order });
export const updateOrder = (id, order) => apiRequest(`/api/orders/${id}`, { method: 'PUT', body: order });
export const deleteOrder = (id) => apiRequest(`/api/orders/${id}`, { method: 'DELETE' });

// Utilisateurs
export const login = (credentials) => apiRequest('/api/auth/login', { method: 'POST', body: credentials });
export const register = (userData) => apiRequest('/api/auth/register', { method: 'POST', body: userData });

// Statistiques
export const getStats = () => apiRequest('/api/stats');