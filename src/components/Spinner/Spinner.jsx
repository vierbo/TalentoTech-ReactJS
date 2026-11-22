import "./Spinner.css";

export const Spinner = ({ text = "Cargando..." }) => {
  return (
    <div className="spinner-wrapper" role="status" aria-live="polite">
      <div className="spinner-circle" aria-hidden="true" />
      <p className="spinner-text">{text}</p>
    </div>
  );
};
