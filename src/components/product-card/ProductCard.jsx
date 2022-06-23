import "./productCard.scss";

const ProductCard = (props) => {
  const { price, model, product, style, colour1, colour2 } = props.product;

  return (
    <div>
      <div className="product-card">
        <div>
          <img
            className="product-card__model-image"
            src={model}
            alt="clothes model"
          />
          <h2 className="product-card__subtitle">{product} </h2>
          <p className="product-card__style">{style}</p>
          <p className="product-card__price">{price}</p>
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
      </div>
    </div>
  );
};

export default ProductCard;
