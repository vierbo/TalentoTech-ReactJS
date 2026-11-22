import { Link } from "react-router-dom";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  isEdit,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="product-form-section">
      <form className="product-form" onSubmit={onSubmit} noValidate>
        <div className="product-form-header">
          <h2>{isEdit ? "Editar producto" : "Agregar nuevo producto"}</h2>
          <Link to="/admin/dashboard" className="btn-form-back">
            &larr; Volver al panel
          </Link>
        </div>

        <div className="form-field">
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ej. Bajo Eléctrico ACME"
            value={product.name}
            onChange={onChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="price">Precio:</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Ej. 2200"
            value={product.price}
            onChange={onChange}
            min="0"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="category">Categoría:</label>
          <input
            id="category"
            type="text"
            name="category"
            placeholder="Ej. bajos"
            value={product.category}
            onChange={onChange}
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Descripción del instrumento..."
            value={product.description}
            onChange={onChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="image-file">
            {isEdit
              ? "Imagen (opcional — dejá vacío para mantener la actual):"
              : "Imagen:"}
          </label>
          {isEdit && product.image && (
            <div className="current-image-preview">
              <img src={product.image} alt={product.name} />
              <span>Imagen actual</span>
            </div>
          )}
          <input
            id="image-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn-form-submit" type="submit" disabled={loading}>
          {loading
            ? "Guardando..."
            : isEdit
              ? "Guardar cambios"
              : "Guardar producto"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
