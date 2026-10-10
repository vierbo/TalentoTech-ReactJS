import { CartItem } from "./CartItem";
import "./Cart.css";

export const CartList = ({ cart }) => {
  return (
    <div className="cart-list">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

