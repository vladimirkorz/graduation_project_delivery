import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Admin from './pages/Admin';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((item) => item.id !== pizzaId));
  };

  const increaseQuantity = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="/order" element={<Order cart={cart} clearCart={clearCart} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;