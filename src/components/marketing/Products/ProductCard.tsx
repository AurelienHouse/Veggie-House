import React from 'react'; 
import { Product } from './ProductList';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-row h-32 sm:h-48">
      <img src={product.imageUrl} alt={product.name} className="w-1/3 object-cover" />
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-900 dark:text-white">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 overflow-hidden line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{product.price.toFixed(2)} €</p>
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
      </div>
    </div>
  );
};

export default ProductCard;
