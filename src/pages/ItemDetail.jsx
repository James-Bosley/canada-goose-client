import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ itemList, addToBasket }) => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const displayedItem = itemList.find(item => String(item.id) === id);
    setItem(displayedItem);
  }, [id, itemList]);

  const handleSelectSize = e => {
    e.target.classList.toggle("info__size-text--selected");
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
              <p className="info__price">{item.price} GBP</p>
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

      <article className="product-details">
        <div className="product-details__titles-container">
          <h2 className="product-details__titles">Features | Materials | Reviews</h2>
        </div>
        <div className="product-details__container">
          <div className="product-details__feature">Feature 1</div>
          <div className="product-details__feature">Feature 2</div>
          <div className="product-details__feature">Feature 3</div>
          <div className="product-details__feature">Feature 4</div>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
