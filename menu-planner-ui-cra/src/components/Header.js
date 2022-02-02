import React from "react";
import HomeNavLink from "../ui/navLinks/HomeNavLink";

const Header = () => {
  return (
    <div className="flex justify-between mx-4">
      <HomeNavLink label="Plan" to="/plan" />
      <HomeNavLink label="Przepisy" to="/recipes" />
      <HomeNavLink label="Produkty" to="/products" />
      <HomeNavLink label="Lista zakupów" to="/shopping-list" />
      <HomeNavLink label="Tagi" to="/tags" />
      <HomeNavLink label="Ustawienia" to="/settings" />
    </div>
  );
};

export default Header;
