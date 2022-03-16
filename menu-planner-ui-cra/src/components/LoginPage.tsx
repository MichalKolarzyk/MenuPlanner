import React from "react";
import { useNavigate } from "react-router-dom";
import bcg from "../assets/bcg.jpg";
import useAccountController from "../controllers/useAccountController";
import useInput from "../hooks/inputs/useInput";
import Input from "../ui/inputs/Input";
import LoginButton from "../ui/buttons/LoginButton";
import useValidatror from "../hooks/validators/useValidator";
import { useSelector } from "react-redux";
import HeaderLabel from "../ui/labels/HeaderLabel";
import Header2Label from "../ui/labels/Header2Label";
import TextButton from "../ui/buttons/TextButton";

const LoginPage = () => {
  const connection = useSelector((state : any) => state.connection);
  const accountController = useAccountController();
  const navigate = useNavigate();

  

  const email = useInput([
    useValidatror(
      (value : any) => value.length >= 10,
      "email musi byc dłuższy niz 10 znakow"
    ),
    useValidatror((value : any) => value.includes("@"), "email musi zawierać znak @"),
    useValidatror((value : any) => value.includes("."), "email musi zawierać znak ."),
  ]);
  const password = useInput([useValidatror((value : any) => value.length >= 6)]);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  const loginSubmitHandler = async (event : any) => {
    event.preventDefault();

    const result = await accountController.login({
      email: email.value,
      password: password.value,
    });

    navigate("/plan", { replace: true });
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
            className="block w-96 bg-white p-4 rounded-xl shadow-xl"
          >
            <HeaderLabel>Menu Planer</HeaderLabel>
            <Header2Label>Zaloguj się:</Header2Label>
            <Input useInput={email} type="email" placeholder="Email" />
            <Input useInput={password} type="password" placeholder="Hasło" />
            <LoginButton disabled={connection.isBusy || !formIsValid} />
          </form>

          <TextButton
            onClick={WithoutLogginHandler}
            disabled={connection.isBusy}
          >
            Kontynuuj jako gość
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
