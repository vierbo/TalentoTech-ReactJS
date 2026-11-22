import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon" aria-hidden="true">
        ✅
      </div>

      <h2>Producto cargado con éxito</h2>
      <p className="success-id">
        ID generado en Firestore: <code>{id}</code>
      </p>
      <p className="success-hint">
        El instrumento ya está disponible en tiempo real en el catálogo de Grave.
      </p>

      <div className="success-actions">
        <Link className="btn-success-primary" to="/admin/products/new">
          Cargar otro producto
        </Link>
        <Link className="btn-success-secondary" to={`/product/${id}`}>
          Ver producto en tienda
        </Link>
        <Link className="btn-success-link" to="/admin/dashboard">
          Volver al Dashboard
        </Link>
      </div>
    </section>
  );
};
