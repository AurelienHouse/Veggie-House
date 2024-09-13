import React from 'react';
import { Product } from './ProductList';

interface CartProps {
  cart: { [key: number]: number };
  products: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
  totalItems: number;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({ cart, products, onAddToCart, onRemoveFromCart, totalItems, totalPrice }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 sm:p-6 mt-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Panier</h2>
      {totalItems === 0 ? (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Votre panier est vide.</p>
      ) : (
        <>
          {products.map((product) => {
            const quantity = cart[product.id] || 0;
            if (quantity === 0) return null;
            return (
              <div key={product.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{product.price.toFixed(2)} €</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => onRemoveFromCart(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-l text-xs sm:text-sm"
                  >
                    -
                  </button>
                  <span className="px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{quantity}</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-green-500 text-white px-2 py-1 rounded-r text-xs sm:text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          <div className="mt-6 border-t pt-4">
            <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Total: {totalPrice.toFixed(2)} €</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;