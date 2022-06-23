import ProductCard from "../product-card/ProductCard";
import Products from "../../util/products.json";

const ProductCardList = () => {
  return Products.map((product) => {
    return (
      <div>
        <ProductCard product={product} />
      </div>
    );
  });
};

export default ProductCardList;
