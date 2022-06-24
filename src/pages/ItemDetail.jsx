import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import inQuotes from "../assets/icons/Group.png";
import outQuotes from "../assets/icons/Group-2.png";

const ItemDetail = ({ itemList, addToBasket }) => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const displayedItem = itemList.find(item => String(item.id) === id);
    setItem(displayedItem);
  }, [id, itemList]);

  let selected = null;
  const handleSelectSize = e => {
    if (selected) {
      selected.classList.remove("info__size-text--selected");
    }
    e.target.classList.add("info__size-text--selected");
    selected = e.target;
  };

  if (!item) return;

  return (
    <>
      <section className="detail__wrapper">
        <div className="detail">
          <div className="detail__image-container">
            <p className="detail__image-message">Sustainability First Knitwears</p>
            <img src={item.model} alt={item.product} className="detail__image" />
          </div>

          <div className="detail__container">
            <div className="info__container">
              <h2 className="info__title">{item.product}</h2>
              <p className="info__price">£{item.price} GBP</p>
            </div>

            <div className="info__container info__container--description">
              <p className="info__description">{item.description}</p>
            </div>

            <div className="info__container info__container--color">
              <h3 className="info__colors-title">Colour</h3>
              <ul className="info__list info__list--color">
                {item.colours.map(color => {
                  return (
                    <li className="info__color-text" key={color}>
                      {color}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="info__sizes-container">
              <h3 className="info__sizes-title">Size</h3>
              <ul className="info__list info__list--sizes">
                {item.sizes.map(size => {
                  return (
                    <li className="info__size-text" key={size} onClick={handleSelectSize}>
                      {size}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="info__cta-container">
              <p className="info__cta-message">Rent now - Only {item.stock} available.</p>
              <button className="info__cta-button" onClick={() => addToBasket(item.id)}>
                Add to Rent
              </button>
            </div>
          </div>
        </div>
      </section>

      <article className="mission">
        <div className="mission__wrapper">
          <h2 className="mission__title">Sustainable First Features</h2>
          <img src={inQuotes} alt="quotes" className="mission__quote-icon" />
          <p className="mission__text">
            Canada Goose rental is part of the Project Human Nature, here we invite you to join our
            rental revolution with our first venture into rented fashion. With the rented option you
            can pick and choose your most desired items to fit todays’s ever evolving lifestyles.
            You will be supporting the mission to end fur use by 2022.
          </p>
          <img
            src={outQuotes}
            alt="quotes"
            className="mission__quote-icon mission__quote-icon--out"
          />
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
