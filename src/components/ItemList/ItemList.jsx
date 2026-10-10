import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="no-products">No se encontraron productos disponibles.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Item key={product.id} {...product}>
          <Link to={`/product/${product.id}`} className="btn-ver-detalle">
            Ver detalle
          </Link>
        </Item>
      ))}
    </div>
  );
};

