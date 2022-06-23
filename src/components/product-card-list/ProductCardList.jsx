import ProductCard from "../product-card/ProductCard";
import Products from "../../util/products.json";

const ProductCardList = () => {
  return Products.map((product) => {
    return (
      <div>
        <ProductCard
          model={product.model}
          price={product.price}
          product={product.product}
          style={product.style}
          colour1={product.colour1}
          colour2={product.colour2}
        />
      </div>
    );
  });
};

export default ProductCardList;
