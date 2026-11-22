import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../Spinner/Spinner";
import { getProducts } from "../../services/productsService";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err.message || "No se pudieron cargar los productos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner text="Cargando productos..." />;
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
