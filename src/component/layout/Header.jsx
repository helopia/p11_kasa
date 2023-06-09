import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbarlogo from "../../assets/images/NavbarLogo.svg";
import "../../assets/sass/layout/_header.scss";
const Header = () => {
  return (
    <header className="navbar">
      <Link to={"/"}>
        <img className="navbar__logo" src={Navbarlogo} alt="Logo Kasa" />
      </Link>
      <nav className="navbar__nav">
        <NavLink className="navbar__nav__link" to={"/"}>
          Accueil
        </NavLink>
        <NavLink className="navbar__nav__link" to={"about"}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
