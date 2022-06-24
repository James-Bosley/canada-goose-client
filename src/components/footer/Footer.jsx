import "./footer.scss";
import MobileFooter from "../../assets/images/Android-Large-1.png";
import DeskTopFooter from "../../assets/images/Footer-2.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__mobile-image" src={MobileFooter} alt="footer" />
      <img className="footer__desktop-image" src={DeskTopFooter} alt="footer" />
    </div>
  );
};
export default Footer;
