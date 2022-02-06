import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import useAccountController from "../hooks/Controllers/useAccountController";

const Nav = () => {
  const accountController = useAccountController();
  const [user, setUser] = useState({});

  useEffect(async () => {
    const user = await accountController.getUser();
    setUser(user);
  }, []);

  const logoutHandler = () => {
    accountController.logout();
  };

  return (
    <div className="flex justify-between items-center px-4 pb-4 mb-4 border-b border-black">
      <Link to="/plan" className="font-semibold text-white text-xl">
        MenuPlannerApp
      </Link>
      <span className="text-white">{`${user && user.firstName} rola: ${user && user.roleName}`}</span>
      <div onClick={logoutHandler} className="text-white cursor-pointer">
        Wyloguj
      </div>
    </div>
  );
};

export default Nav;
