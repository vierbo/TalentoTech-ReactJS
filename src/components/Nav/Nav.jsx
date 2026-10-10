import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Nav.css";

export const Nav = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link active carrito-icono" : "nav-link carrito-icono"
            }
          >
            <img src="/img/icon-carrito.png" alt="Carrito de compras" className="cart-img" />
            <span className="cart-badge">{totalQuantity}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

