import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { useCart } from "./context/CartContext";
import "./App.css";

export const CartView = () => {
  const { cart, totalQuantity } = useCart();

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2>Mi Carrito</h2>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Total de unidades: <strong>{totalQuantity}</strong>
      </p>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>El carrito todavía está vacío.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cart.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#FFFFFF",
                padding: "1rem 1.5rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img src={prod.image} alt={prod.name} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                <div>
                  <h4 style={{ margin: 0 }}>{prod.name}</h4>
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>Cantidad: {prod.quantity}</span>
                </div>
              </div>
              <strong style={{ fontSize: "1.1rem" }}>${(prod.price * prod.quantity).toLocaleString("es-AR")}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
              <h2>404 - Página no encontrada</h2>
              <p>La sección que buscas no existe.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
