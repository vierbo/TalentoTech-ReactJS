import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export const CartSummary = () => {
  const { getCartTotal, clearCart, totalQuantity } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();

  const handleCheckout = () => {
    clearCart();
    toast.success("¡Muchas gracias por tu compra en Grave!");
    navigate("/");
  };

  const handleClearCart = () => {
    clearCart();
    toast.info("Carrito vaciado");
  };

  return (
    <aside className="cart-summary-box">
      <h3 className="summary-title">Resumen de compra</h3>
      <p className="summary-row">
        <span>Total de instrumentos:</span>
        <strong>{totalQuantity}</strong>
      </p>
      <p className="summary-row total-highlight">
        <span>Total a pagar:</span>
        <strong className="summary-price">${total.toLocaleString("es-AR")}</strong>
      </p>

      <div className="summary-actions">
        <button className="btn-finalizar-compra" onClick={handleCheckout}>
          Finalizar compra
        </button>
        <button className="btn-vaciar-carrito" onClick={handleClearCart}>
          Vaciar carrito
        </button>
        <Link to="/" className="link-seguir-comprando">
          &larr; Seguir explorando bajos
        </Link>
      </div>
    </aside>
  );
};
