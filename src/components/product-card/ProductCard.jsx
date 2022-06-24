import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { price, model, product, style, colour1, colour2, id } = props.product;
  console.log(id);
  return (
    <div className="product-card">
      <Link to={`${id}`}>
        <div>
          <img
            className="product-card__model-image"
            src={model}
            alt="clothes model"
          />

          <h2 className="product-card__subtitle">{product} </h2>
          {/* <p className="product-card__style">{style}</p>
        <p className="product-card__price">{price}</p> */}
          {/* <img
            className="product-card__colour"
            src=""
            alt="product colour black"
          />
          <img
            className="product-card__colour product-card__colour--position"
            src=""
            alt="product colour black"
          /> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
