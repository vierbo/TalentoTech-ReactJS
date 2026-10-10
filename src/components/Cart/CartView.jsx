import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-view-container">
      <h2 className="cart-page-title">Tu Carrito de Compras</h2>

      {cart.length > 0 ? (
        <div className="cart-content-layout">
          <CartList cart={cart} />
          <CartSummary />
        </div>
      ) : (
        <div className="empty-cart-state">
          <p className="empty-cart-msg">Tu carrito todavía está vacío 🎸</p>
          <p className="empty-cart-sub">Explorá nuestro catálogo y sumá tus bajos favoritos.</p>
          <Link to="/" className="btn-volver-home">
            Ver catálogo
          </Link>
        </div>
      )}
    </section>
  );
};
