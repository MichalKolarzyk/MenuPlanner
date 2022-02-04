import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcg from "../assets/bcg.jpg";
import useAccountController from "../hooks/Controllers/useAccountController";
import useInput from "../hooks/useInput";
import ApiContext from "../store/ApiContext";
import Input from "../ui/inputs/Input";
import LoginButton from "../ui/buttons/LoginButton";

const MainSite = () => {
  const apiContext = useContext(ApiContext);
  const accountController = useAccountController();
  let navigate = useNavigate();

  useEffect(() => {
    if (apiContext.isLoggedIn === true) {
      navigate("/plan");
    }
  });

  const email = useInput((value) => value.includes("@") && value.length >= 7);
  const password = useInput((value) => value.length >= 6);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    await accountController.login({
      email: email.value,
      password: password.value,
    });

    navigate("/plan");
    email.reset();
    password.reset();
  };

  const WithoutLogginHandler = async () => {
    await accountController.login({
      email: "mk@gmail.com",
      password: "1234",
    });
    navigate("/plan");
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img
          src={bcg}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <form
            onSubmit={loginSubmitHandler}
            className="bg-white p-4 rounded-xl shadow-xl"
          >
            <div className="p-5 text-black text-3xl tracking-widest text-center">
              MenuPlanner
            </div>
            <div className="p-5 text-black text-xl tracking-widest text-center">
              Zaloguj się:
            </div>
            <div className="">
              <Input useInput={email} type="email" placeholder="Email" />
              <Input useInput={password} type="password" placeholder="Hasło" />
            </div>
            <LoginButton disabled={apiContext.isBusy || !formIsValid} />
          </form>
          <button
            disabled={apiContext.isBusy}
            onClick={WithoutLogginHandler}
            className="mt-2 text-white tracking-widest"
          >
            Kontynuuj jako gość
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSite;
