import ProductCard from "../product-card/ProductCard";
import closeIcon from "../../assets/icons/close-24px.svg";
import toast from "react-hot-toast";
import "./basket.scss";

const Basket = ({ close, basket, clearBasket }) => {
  const totalCost = basket.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);

  const handleSubmit = () => {
    toast.success("Rental order placed. Thankyou!");
    clearBasket();
    close();
  };

  return (
    <div className="basket">
      <div className="basket__header">
        <img src={closeIcon} alt="close" onClick={close} className="basket__close" />
        <h1 className="basket__header-text">Shopping Bag</h1>
        <p className="basket__sub-header">
          <span className="basket__sub-header--underline">Sign In</span> or{" "}
          <span className="basket__sub-header--underline">Create Account</span>
        </p>
      </div>

      <ul className="basket__contents">
        {basket.map(item => {
          return (
            <li key={item.id} onClick={close} className="bskt-item">
              <img src={item.model} alt="model" className="bskt-item__image" />
              <h3 className="bskt-item__title">{item.product}</h3>
              <p className="bskt-item__info">Qty: {item.quantity}</p>
              <p className="bskt-item__info">£{item.quantity * item.price}</p>
            </li>
          );
        })}
      </ul>

      <div className="basket__cta-container">
        <p className="basket__total">Subtotal £{totalCost} GBP</p>
        <button className="basket__submit" onClick={handleSubmit}>
          Rent
        </button>
        <p className="basket__text">Free shipping available</p>
      </div>
    </div>
  );
};

export default Basket;
