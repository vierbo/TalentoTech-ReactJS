import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe utilizarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item, quantity = 1) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
