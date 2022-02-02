import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcg from "../assets/bcg.jpg";
import useInput from "../hooks/useInput";
import useAccountController from "../hooks/useAccountController";
import ApiContext from "../store/ApiContext";
import Input from "../ui/inputs/Input";

const MainSite = () => {
  const apiContext = useContext(ApiContext);
  const accountController = useAccountController();
  let navigate = useNavigate();

  useEffect(() => {
    if (apiContext.isLoggedIn === true) {
      navigate("/plan");
    }
  });

  const email = useInput((value) => value.includes("@"));
  const password = useInput((value) => value.length >= 5);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    // if (!formIsValid) {
    //   return;
    // }

    await accountController.login({
      email: email.value,
      password: password.value,
    });

    navigate("/plan");
    email.reset();
    password.reset();
  };

  return (
    <form
      onSubmit={loginSubmitHandler}
      className="flex justify-start items-center flex-col h-screen"
    >
      <div className="relative w-full h-full">
        <img
          src={bcg}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <div className="p-5 text-black text-3xl tracking-widest text-center">
              MenuPlanner
            </div>
            <button className="p-5 text-black text-xl tracking-widest text-center">
              Zaloguj się:
            </button>
            <div className="shadow-2xl">
              <Input useInput={email} type="email" placeholder="Email" />
              <Input useInput={password} type="password" placeholder="Hasło" />
            </div>
          </div>
          <Link to="/plan" className="mt-2 text-white tracking-widest">
            Kontynuuj bez logowania
          </Link>
        </div>
      </div>
    </form>
  );
};

export default MainSite;
