import ProductCard from "../components/product-card/ProductCard";
import "./pageStyles.scss";
import Hero from "../components/hero/Hero.jsx";

const ProductListing = ({ itemList }) => {
  return (
    <section>
      <Hero />
      <div className="page-container">
        <div className="page-wrapper">
          <ul className="product-shop">
            {itemList.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
