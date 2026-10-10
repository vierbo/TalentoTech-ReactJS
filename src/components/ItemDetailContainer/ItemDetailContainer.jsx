import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
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

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo obtener la información de los productos");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((prod) => String(prod.id) === String(id));
        if (found) {
          setItem(found);
        } else {
          throw new Error("El producto seleccionado no existe");
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="status-container">
        <p className="loading-text">Cargando detalle del producto...</p>
      </div>
    );
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
