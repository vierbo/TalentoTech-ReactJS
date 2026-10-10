import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <img src="/img/logo_tienda.png" alt="Logo de Grave Tienda" className="header-logo" />
          <h1 className="header-title">Grave</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
