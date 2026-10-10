import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(item, 1);
    setAdded(true);
  };

  return (
    <article className="item-detail-card">
      <div className="item-detail-image-box">
        <img src={item.image} alt={item.name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <span className="item-category-tag">{item.category}</span>
        <h2 className="item-detail-title">{item.name}</h2>
        <p className="item-detail-price">${item.price.toLocaleString("es-AR")}</p>
        <p className="item-detail-description">{item.description}</p>
        
        <div className="item-detail-actions">
          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
          
          {added && (
            <p className="feedback-added">
              ¡Producto añadido al carrito!
            </p>
          )}

          <Link to="/" className="btn-volver">
            &larr; Volver al catálogo
          </Link>
        </div>
      </div>
    </article>
  );
};

