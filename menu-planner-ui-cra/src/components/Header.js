import React from "react";
import RoutesConfig from "../configurations/RoutesConfig";
import RoundedCanvas from "../ui/canvases/RoundedCanvas";
import HomeNavLink from "../ui/navLinks/HomeNavLink";

const Header = () => {
  return (
    <RoundedCanvas>
      <div className="flex justify-between overflow-auto mb-4 px-4 bg-white rounded-xl shadow-xl">
        <HomeNavLink label="Plan" to={RoutesConfig.planPage} />
        <HomeNavLink label="Przepisy" to={RoutesConfig.recipesPage} />
        <HomeNavLink label="Produkty" to={RoutesConfig.productsPage} />
        <HomeNavLink label="Zakupy" to={RoutesConfig.shoppingListPage} />
        <HomeNavLink label="Ustawienia" to={RoutesConfig.settingsPage} />
      </div>
    </RoundedCanvas>
  );
};

export default Header;
