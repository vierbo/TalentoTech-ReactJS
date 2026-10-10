import "./Item.css";

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="item-card">
      <div className="item-image-wrapper">
        <img src={image} alt={`Bajo eléctrico ${name}`} className="item-image" />
      </div>
      <div className="item-content">
        <h3 className="item-title">{name}</h3>
        <p className="item-desc">{description}</p>
        <p className="item-price">${price.toLocaleString("es-AR")}</p>
        {children}
      </div>
    </article>
  );
};

