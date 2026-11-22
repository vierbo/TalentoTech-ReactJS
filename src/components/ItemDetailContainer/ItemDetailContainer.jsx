import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "../Spinner/Spinner";
import { getProductById } from "../../services/productsService";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItem(null);
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((found) => {
        if (found) {
          setItem(found);
        } else {
          throw new Error("El producto seleccionado no existe");
        }
      })
      .catch((err) => {
        setError(err.message || "Error al obtener el producto");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner text="Cargando detalle del producto..." />;
  }

  if (error) {
    return (
      <div className="status-container">
        <p className="error-text">{error}</p>
        <Link to="/" className="btn-volver-catalogo">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  if (!item) {
    return null;
  }

  return (
    <section className="item-detail-container">
      <ItemDetail item={item} />
    </section>
  );
};
