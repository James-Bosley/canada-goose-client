import React from "react";

import ProductColourBlack from "../../assets/images/product-colour-black.svg";
import ProductColourGrey from "../../assets/images/product-colour-grey.svg";

import "./productCard.scss";
const ProductCard = ({ price, model, product, style, colour1, colour2 }) => {
  console.log(model);
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
          <img
            className="product-card__colour"
            src={colour1}
            alt="product colour black"
          />
          <img
            className="product-card__colour product-card__colour--position"
            src={colour2}
            alt="product colour black"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
