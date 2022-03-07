import React from "react";
import { useNavigate } from "react-router-dom";
import useAccountController from "../controllers/useAccountController";
import useUser from "../store/user/useUser";
import BoldTextButton from "../ui/buttons/BoldTextButton";
import TextButton from "../ui/buttons/TextButton";

const Nav = () => {
  const accountController = useAccountController();
  const navigate = useNavigate();
  const userHook = useUser();


  const logoutHandler = () => {
    accountController.logout();
  };

  const toPlanHandler = () => {
    navigate('/plan')
  }

  return (
    <div className="flex justify-between items-center px-4 pb-4 mb-4 border-b border-white">
      <BoldTextButton onClick={toPlanHandler}>MenuPlannerApp</BoldTextButton>
      <TextButton>{userHook.getFullName()}</TextButton>
      <TextButton onClick={logoutHandler}>
        Wyloguj
      </TextButton>
    </div>
  );
};

export default Nav;
