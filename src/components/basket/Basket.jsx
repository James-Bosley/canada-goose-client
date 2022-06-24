import closeIcon from "../../assets/icons/close-24px.svg";

const Basket = ({ close, basket }) => {
  const totalCost = basket.reduce((prev, current) => {
    return prev + current.qty * current.price;
  }, 0);

  return (
    <div>
      <div className="basket__header">
        <img src={closeIcon} alt="close" onClick={close} className="basket__close" />
        <h1 className="basket__header">Shopping Bag</h1>
        <p className="basket__sub-header">
          <span className="basket__sub-header--underline">Sign In </span>or
          <span className="basket__sub-header--underline"> Create Account</span>
        </p>
      </div>

      <div className="basket__contents">{basket.map}</div>

      <div className="basket__cta-container">
        <p className="basket__total">Subtotal £{totalCost} GBP</p>
        <button className="basket__submit">Rent</button>
        <p className="basket__text">Free shipping available</p>
      </div>
    </div>
  );
};
export default Basket;
