import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormButton } from "./FormButton";
import { toast } from "react-toastify";
import clsx from "clsx";
import { useAxios } from "../hooks/useAxios";
import { validateInput } from "../utility/UserValidation";
import { isFormCompiled } from "../utility/formValidation";
import {
  notifyAxiosError,
  notifySuccess,
} from "../utility/toastifyNotification";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

export const Form = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    email: "",
    password: "",
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

  const { data, error, loading, update } = useAxios(
    "http://localhost:3000/api/users/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: register,
    }
  );

  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
    update: loginUpdate,
  } = useAxios("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: loginForm,
  });

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;

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
      {!isLogin && (
        <div className="flex bg-[#121420] rounded-3xl rounded-r-[1.8rem] shadow-2xl">
          <div className="py-20 px-16 rounded-3xl">
            <span className="text-white text-3xl font-bold text-center w-full block mb-6">
              Registrati
            </span>
            <form>
              <div className="flex flex-col gap-5 min-w-80">
                {page === 1 ? (
                  <>
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={register.email}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="email"
                      title="Example@example.com"
                    />
                    <FormInput
                      type="text"
                      name="name"
                      placeholder="Nome"
                      value={register.name}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="name"
                      title="Inserisci il tuo nome"
                    />
                    <FormInput
                      type="text"
                      name="lastName"
                      placeholder="Cognome"
                      value={register.lastName}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="lastName"
                      title="Inserisci il tuo cognome"
                    />
                    <FormInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={register.password}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="new-password"
                      title="Deve contenera una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri"
                    />
                  </>
                ) : (
                  <>
                    <FormInput
                      type="text"
                      name="country"
                      placeholder="Paese"
                      value={register.country}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="country"
                      title="Inserisci paese"
                    />
                    <div className="flex gap-4 max-w-80">
                      <FormInput
                        type="text"
                        name="address"
                        placeholder="Indirizzo"
                        value={register.address}
                        handlerFunc={handleRegisterInputChange}
                        autoComplete="address"
                        addClass="w-9/12"
                        title="Inserisci indirizzo"
                      />
                      <FormInput
                        type="text"
                        name="civic"
                        placeholder="Civico"
                        value={register.civic}
                        handlerFunc={handleRegisterInputChange}
                        autoComplete="civic"
                        addClass="w-3/12"
                        title="Inserisci civico"
                      />
                    </div>
                    <FormInput
                      type="text"
                      name="zipCode"
                      placeholder="Cap"
                      value={register.zipCode}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="zip-code"
                      maxLength={5}
                      title="Inserisci cap"
                    />
                    <FormInput
                      type="tel"
                      name="phone"
                      placeholder="+39 1112223334"
                      value={register.phone}
                      handlerFunc={handleRegisterInputChange}
                      autoComplete="phone"
                      title="Inserisci numero di cellulare"
                    />
                  </>
                )}
                <div className="flex justify-between">
                  <FormButton
                    text="Indietro"
                    isButton={true}
                    marginTop="4"
                    singleButton={false}
                    handler={() =>
                      setPage((prevState) =>
                        page > 1 ? (prevState -= 1) : prevState
                      )
                    }
                  />
                  <FormButton
                    text={clsx(page === 1 ? "Avanti" : "Registrati")}
                    isButton={true}
                    marginTop="4"
                    singleButton={false}
                    handler={page === 1 ? handleNextPage : handleRegisterSubmit}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center py-20 px-14 gap-6 bg-[#F0C039] rounded-r-3xl rounded-tl-[160px] rounded-bl-[120px]">
            <span className="text-[#121420] text-3xl font-bold min-w-72">
              Hai già un account?
            </span>
            <FormButton text="Login" isButton={false} path="/login" />
            <div className="flex items-center gap-2 border-b border-[#121420]">
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-left"
                size="lg"
                style={{ color: "#121420" }}
              />
              <Link to="/" className="text-lg text-[#121420] font-semibold">
                Torna alla home
              </Link>
            </div>
          </div>
        </div>
      )}
      {isLogin && (
        <div className="flex bg-[#121420] rounded-3xl rounded-r-[1.8rem] shadow-2xl">
          <div className="py-[118px] px-16 rounded-3xl">
            <span className="text-white text-3xl font-bold text-center w-full block mb-6">
              Login
            </span>
            <form>
              <div className="flex flex-col items-center gap-5 min-w-80">
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
          </div>
          <div className="py-20 px-14 flex flex-col justify-center items-center gap-6 bg-[#F0C039] rounded-r-3xl rounded-tl-[160px] rounded-bl-[120px]">
            <span className="text-3xl font-bold min-w-72">
              Non hai un account?
            </span>
            <FormButton text="Registrati" isButton={false} path="/register" />
            <div className="flex items-center gap-2 border-b border-[#121420]">
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-left"
                size="lg"
                style={{ color: "#121420" }}
              />
              <Link to="/" className="text-lg text-[#121420] font-semibold">
                Torna alla home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
