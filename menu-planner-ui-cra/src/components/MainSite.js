import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import bcg from "../assets/bcg.jpg";
import useInput from "../hooks/useInput";
import useAccountController from "../hooks/useAccountController";

const MainSite = () => {
  const accountController = useAccountController();

  const email = useInput((value) => value.includes("@"));
  const password = useInput((value) => true);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    await accountController.login({
      email: email.value,
      password: password.value,
    });

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
              <input
                type="email"
                className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700"
                placeholder="Email"
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
              />
              <input
                type="password"
                className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700"
                placeholder="Hasło"
                value={password.value}
                onChange={password.onChange}
                onBlur={password.onBlur}
              />
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
