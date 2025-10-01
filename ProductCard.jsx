// components/ProductCard.js - Carte produit
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image || '/images/placeholder-bread.jpg'} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-amber-600">{product.price} €</span>
          <span className={`px-2 py-1 rounded-full text-xs ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.stock > 0 ? 'En stock' : 'Rupture'}
          </span>
        </div>
        
        {product.stock > 0 ? (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 px-2 py-1 border rounded"
            />
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded"
            >
              Ajouter au panier
            </button>
          </div>
        ) : (
          <button className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-not-allowed" disabled>
            Produit indisponible
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;