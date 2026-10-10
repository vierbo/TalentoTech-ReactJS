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

  // Resta una unidad; si llega a 0, elimina el producto del carrito
  const decreaseItem = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
        .filter((prod) => prod.quantity > 0)
    );
  };

  // Elimina completamente el producto sin importar la cantidad
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        removeItem,
        clearCart,
        getCartTotal,
        isInCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
