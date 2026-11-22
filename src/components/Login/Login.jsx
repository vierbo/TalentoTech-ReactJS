import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { Spinner } from "../Spinner/Spinner";
import "./Login.css";

export const Login = () => {
  const { user, loading: authLoading, login } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (authLoading) {
    return <Spinner text="Verificando sesión..." />;
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await login(formData.email, formData.password);
      toast.success("Sesión iniciada correctamente");
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Credenciales inválidas. Verificá tu correo y contraseña.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-header">
          <img src="/img/logo_tienda.png" alt="Logo Grave" className="login-logo" />
          <h2>Panel Administrador</h2>
          <p className="login-subtitle">Ingresá con tu cuenta de administrador de Grave</p>
        </div>

        <div className="login-form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="admin@admin.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn-login" type="submit" disabled={submitting}>
          {submitting ? "Ingresando..." : "Ingresar"}
        </button>

        <Link to="/" className="login-back-link">
          &larr; Volver a la tienda
        </Link>
      </form>
    </section>
  );
};
