import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormButton } from "../buttons/FormButton";
import { ToastContainer, toast } from "react-toastify";
import clsx from "clsx";
import { useAxios } from "../../hooks/useAxios";
import { validateInput } from "../../utility/userValidation";
import { isFormCompiled } from "../../utility/formValidation";
import {
  notifyAxiosError,
  notifySuccess,
} from "../../utility/toastifyNotification";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import loginImage from "../../assets/images/login-register/login.jpg";

export const Form = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
    country: "",
    address: "",
    zipCode: "",
    phone: "+39 ",
    civic: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [page, setPage] = useState(1);

  //chiamata registrazione

  const { data, error, loading, update } = useAxios("/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: register,
  });

  //chiamata login

  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
    update: loginUpdate,
  } = useAxios("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: loginForm,
  });

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;

    //switch per rimuovere caratteri non numerici

    let validatedValue;

    switch (name) {
      case "zipCode":
        validatedValue = value.replace(/[^\d]/g, "");
        break;
      case "civic":
        validatedValue = value.replace(/[^\d]/g, "");
        break;
      default:
        validatedValue = value;
    }

    setRegister((prevState) => {
      return {
        ...prevState,
        [name]: validatedValue,
      };
    });
  };

  const handleLoginInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setLoginForm((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleNextPage = () => {
    toast.dismiss();

    if (!isFormCompiled(register, page)) {
      setPage((prevState) => (page < 2 ? (prevState += 1) : prevState));
    } else {
      validateInput(register, page);
    }
  };

  const handleRegisterSubmit = async () => {
    toast.dismiss();
    if (!isFormCompiled(register, page)) {
      await update();
    } else {
      validateInput(register, page);
    }
  };

  const handleLoginSubmit = async () => {
    await loginUpdate();
  };

  //gestione registrazione che, una volta avvenuta, renderizza l'utente alla pagina di login

  useEffect(() => {
    if (!loading) {
      if (data) {
        navigate("/login");
        setTimeout(() => {
          notifySuccess(data?.message);
        }, 1);
      } else {
        notifyAxiosError(error?.response?.data?.message);
      }
    }
  }, [error, data, loading]);

  //gestione login che, una volta avvenuto, renderizza l'utente alla pagina dei prodotti

  useEffect(() => {
    if (!loginLoading) {
      if (loginData) {
        const { id, token } = loginData.user;
        dispatch(login({ id, token }));
        setTimeout(() => {
          notifySuccess(loginData?.message);
        }, 1);
      } else {
        notifyAxiosError(loginError?.response?.data?.message);
      }
    }
  }, [loginError, loginData, loginLoading]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "#080808", color: "white" }}
      />
      {!isLogin ? (
        <div className="flex flex-col bg-black rounded-xl border border-border max-w-screen-2xl m-auto w-full p-16">
          <div className="flex gap-6">
            <div className="flex-1 basis-4/6">
              <img src={loginImage} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col justify-between flex-1 basis-2/6">
              <form>
                <div className="flex flex-col items-center gap-12">
                  <span className="text-white text-4xl font-bold w-full block font-prosto">
                    Benvenuto
                  </span>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginForm.email}
                    handlerFunc={handleLoginInputChange}
                    autoComplete="email"
                    addClass="w-full"
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginForm.password}
                    handlerFunc={handleLoginInputChange}
                    autoComplete="new-password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />
                  <FormInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Conferma password"
                    value={loginForm.confirmPassword}
                    handlerFunc={handleLoginInputChange}
                    autoComplete="new-password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />
                  <FormButton
                    text="Registrati"
                    isButton={true}
                    marginTop="4"
                    handler={handleLoginSubmit}
                  />
                </div>
              </form>
              <span className="text-white text-center block">
                Non sei registrato?
              </span>
              <FormButton text="Login" isButton={false} path="/login" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-black rounded-xl border border-border max-w-screen-2xl m-auto w-full p-16">
          <div className="flex gap-6">
            <div className="flex-1 basis-4/6">
              <img src={loginImage} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col justify-between flex-1 basis-2/6">
              <form>
                <div className="flex flex-col items-center gap-12">
                  <span className="text-white text-4xl font-bold w-full block font-prosto">
                    Bentornato
                  </span>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginForm.email}
                    handlerFunc={handleLoginInputChange}
                    autoComplete="email"
                    addClass="w-full"
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginForm.password}
                    handlerFunc={handleLoginInputChange}
                    autoComplete="new-password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />
                  <FormInput
                    type="checkbox"
                    name="remember"
                    checked={loginForm.remember}
                    handlerFunc={handleLoginInputChange}
                    text="Resta connesso"
                  />
                  <FormButton
                    text="Login"
                    isButton={true}
                    marginTop="4"
                    handler={handleLoginSubmit}
                  />
                </div>
              </form>
              <span className="text-white text-center block">
                Non sei registrato?
              </span>
              <FormButton text="Registrati" isButton={false} path="/register" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
