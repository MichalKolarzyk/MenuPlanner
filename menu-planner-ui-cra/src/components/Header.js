import React from "react";
import HomeNavLink from "../ui/navLinks/HomeNavLink";

const Header = () => {
  return (
    <div className="flex justify-between overflow-auto mb-4 px-4 bg-white rounded-xl shadow-xl">
      <HomeNavLink label="Plan" to="/plan" />
      <HomeNavLink label="Przepisy" to="/recipes" />
      <HomeNavLink label="Produkty" to="/products" />
      <HomeNavLink label="Zakupy" to="/shopping-list" />
      <HomeNavLink label="Tagi" to="/tags" />
      <HomeNavLink label="Ustawienia" to="/settings" />
    </div>
  );
};

export default Header;
