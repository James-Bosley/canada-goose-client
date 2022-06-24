import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = props => {
  const { model, product, id } = props.product;
  return (
    <div className="product-card">
      <Link to={`/sustainable/${id}`}>
        <div>
          <img className="product-card__model-image" src={model} alt="clothes model" />

          <h2 className="product-card__subtitle">{product}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
