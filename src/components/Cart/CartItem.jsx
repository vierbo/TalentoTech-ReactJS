import { useCart } from "../../context/CartContext";
import "./Cart.css";

export const CartItem = ({ item }) => {
  const { addItem, decreaseItem, removeItem } = useCart();

  return (
    <article className="cart-item-card">
      <div className="cart-item-img-wrapper">
        <img src={item.image} alt={item.name} className="cart-item-img" />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <p className="cart-item-unit-price">
          Precio unitario: ${item.price.toLocaleString("es-AR")}
        </p>

        <div className="cart-item-counter-box">
          <span className="counter-label">Cantidad:</span>
          <div className="counter-controls">
            <button
              className="btn-counter"
              onClick={() => decreaseItem(item.id)}
              aria-label="Restar una unidad"
              title="Restar 1"
            >
              -
            </button>
            <span className="counter-value">{item.quantity}</span>
            <button
              className="btn-counter"
              onClick={() => addItem(item, 1)}
              aria-label="Sumar una unidad"
              title="Sumar 1"
            >
              +
            </button>
          </div>
        </div>

        <p className="cart-item-subtotal">
          Subtotal: <strong>${(item.price * item.quantity).toLocaleString("es-AR")}</strong>
        </p>
      </div>

      <button
        className="btn-remove-item"
        onClick={() => removeItem(item.id)}
        aria-label={`Eliminar ${item.name} del carrito`}
        title="Eliminar producto"
      >
        Eliminar
      </button>
    </article>
  );
};

