import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import { deleteProduct, getProducts } from "../../../services/productsService";
import { Spinner } from "../../Spinner/Spinner";
import "./Dashboard.css";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message || "Error al cargar el catálogo"))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.info("Sesión cerrada");
    } catch {
      toast.error("No se pudo cerrar la sesión");
    }
  };

  const handleConfirmDelete = async () => {
    if (!productToDelete) return;
    setDeleting(true);

    try {
      await deleteProduct(productToDelete.id);
      setProducts((prev) => prev.filter((item) => item.id !== productToDelete.id));
      toast.success(`"${productToDelete.name}" fue eliminado del catálogo`);
      setProductToDelete(null);
    } catch (err) {
      console.error(err);
      toast.error("Error al eliminar el producto");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h2>Panel de Administración — Grave</h2>
          {user?.email && <p className="dashboard-user">Sesión activa: {user.email}</p>}
        </div>

        <div className="dashboard-header-actions">
          <Link className="btn-dash-secondary" to="/">
            Volver a la tienda
          </Link>
          <button className="btn-dash-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="dashboard-toolbar">
        <div>
          <h3>Gestión de Productos ({products.length})</h3>
          <p className="dashboard-subtitle">
            Crear, modificar o eliminar productos
          </p>
        </div>
        <Link to="/admin/products/new" className="btn-dash-create">
          + Cargar nuevo producto
        </Link>
      </section>

      {loading && <Spinner text="Cargando productos desde Firestore..." />}

      {!loading && error && (
        <div className="dashboard-error-box">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="dashboard-empty">
          <p>Todavía no hay productos cargados en Firestore.</p>
          <Link to="/admin/products/new" className="btn-dash-create">
            Cargar el primer producto
          </Link>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="dashboard-products-list">
          {products.map((prod) => (
            <article key={prod.id} className="dashboard-product-row">
              <div className="dashboard-product-thumb">
                <img src={prod.image} alt={prod.name} />
              </div>

              <div className="dashboard-product-info">
                <h4>{prod.name}</h4>
                <span className="dashboard-product-cat">{prod.category}</span>
                <p className="dashboard-product-price">
                  ${Number(prod.price).toLocaleString("es-AR")}
                </p>
              </div>

              <div className="dashboard-product-actions">
                <Link
                  to={`/admin/products/edit/${prod.id}`}
                  className="btn-row-edit"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  className="btn-row-delete"
                  onClick={() => setProductToDelete(prod)}
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {productToDelete && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal-card">
            <h3>Confirmar eliminación</h3>
            <p>
              ¿Seguro que querés eliminar{" "}
              <strong>{productToDelete.name}</strong> del catálogo? Esta acción
              no se puede deshacer.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="btn-modal-cancel"
                onClick={() => setProductToDelete(null)}
                disabled={deleting}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn-modal-confirm"
                onClick={handleConfirmDelete}
                disabled={deleting}
              >
                {deleting ? "Eliminando..." : "Sí, eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
