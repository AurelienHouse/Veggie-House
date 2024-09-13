import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Container from '../../elements/Container';
import Cart from './Cart';

export interface Product { 
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Veggie Burger', description: 'Un délicieux burger végétarien.', price: 8.99, imageUrl: 'https://aurelienmaison.book.fr/files/1/112482/g_20_mPGHfur930ci.jpg' },
  { id: 2, name: 'Frites de Patate Douce', description: 'Frites croquantes de patate douce.', price: 3.99, imageUrl: 'https://aurelienmaison.book.fr/files/1/112482/g_20_lngG8kunWJ4l.jpg' },
  { id: 3, name: 'Boisson Maison', description: 'Une boisson rafraîchissante maison.', price: 2.99, imageUrl: 'https://aurelienmaison.book.fr/files/1/112482/g_20_73VQwlPRtLcM.jpg' },
];

const ProductList: React.FC = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const handleAddToCart = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + (cart[product.id] || 0) * product.price;
    }, 0);
  };

  return (
    <Container>
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 gap-4 mb-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
        <div>
          <Cart
            cart={cart}
            products={products}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            totalItems={getTotalItems()}
            totalPrice={getTotalPrice()}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
