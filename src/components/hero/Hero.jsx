import React from "react";
import "./hero.scss";
import Frame1 from "../../assets/images/Frame1.png";
import Frame2 from "../../assets/images/Frame2.png";
import Frame3 from "../../assets/images/Frame-3.png";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: Frame3,
  },
  {
    original: Frame1,
  },
  {
    original: Frame2,
  },
];

const hero = () => {
  return (
    <div>
      <ImageGallery showThumbnails={"false"} items={images} />
    </div>
  );
};

export default hero;
