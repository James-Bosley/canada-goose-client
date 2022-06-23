import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/cg-logo-black.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import bagIcon from "../../assets/icons/bag-svgrepo-com.svg";
import "./header.scss";

const Header = ({ basket }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header-top">
          <nav className="drop-menu__container">
            <BurgerMenu className="drop-menu">
              <NavLink to="sustainable" className="drop-menu__item">
                Sustainability First
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
              <p className="header-top__added-text">Search</p>
            </div>

            <div className="header-top__icon-container">
              <img src={bagIcon} className="header-top__icon header-top__icon--bag" alt="basket" />
              <p className="header-top__basket-qty">{basket.length}</p>
              <p className="header-top__added-text">Bag</p>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="main-nav">
            <NavLink to="sustainable" className="main-nav__item main-nav__item--highlight">
              Sustainability First
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
              Beyond
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
