import ProductCard from "../components/product-card/ProductCard";
import "./pageStyles.scss";

const ProductListing = ({ itemList }) => {
  return (
    <section>
      <div className="hero">
        <h1>THIS IS A HERO</h1>
      </div>
      <ul className="product-shop">
        {itemList.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
};

export default ProductListing;
