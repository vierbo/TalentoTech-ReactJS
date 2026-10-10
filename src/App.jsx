import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import "./App.css";

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
