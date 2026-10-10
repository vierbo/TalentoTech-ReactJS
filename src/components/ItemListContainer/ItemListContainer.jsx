import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <p className="loading-text">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <p className="error-text">Ocurrió un error: {error}</p>
      </div>
    );
  }

  return (
    <section className="item-list-container">
      <div className="banner-intro">
        <h2 className="section-title">Tienda para bajistas</h2>
        <p className="section-subtitle">
          Bienvenidos a Grave. Encontrá una selección curada de los mejores bajos eléctricos 
          y descubrí el sonido ideal para tu música.
        </p>
      </div>
      <h3 className="catalog-heading">Catálogo de Productos</h3>
      <ItemList products={products} />
    </section>
  );
};

