import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/cg-logo-black.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./header.scss";

const Header = ({ basket }) => {
  return (
    <header className="header">
      <div className="header-top">
        <nav className="drop-menu__container">
          <BurgerMenu className="drop-menu">
            <NavLink to="sustainable" className="drop-menu__item">
              Sustainable
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Men
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Women
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Kids
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Humanature
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Our Products
            </NavLink>
            <NavLink to="/" className="drop-menu__item">
              Beyond
            </NavLink>
          </BurgerMenu>
        </nav>
        <div className="header-top__spacer-div"></div>

        <NavLink to="/" className="header-top__logo-container">
          <img src={logo} className="header-top__logo" alt="logo" />
        </NavLink>

        <div className="header-top__action-container">
          <div className="header-top__icon-container">
            <img src={searchIcon} className="header-top__icon" alt="search" />
          </div>

          <div className="header-top__icon-container">
            <img
              src={searchIcon}
              className="header-top__icon header-top__icon--basket"
              alt="basket"
            />
            <p className="header-top__basket-qty">{basket.length}</p>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="main-nav">
          <NavLink to="sustainable" className="main-nav__item main-nav__item--highlight">
            Sustainable
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Men
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Women
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Kids
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Humanature
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Our Products
          </NavLink>
          <NavLink to="/" className="main-nav__item">
            Beyond
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
