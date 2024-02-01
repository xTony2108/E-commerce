import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export const Form = ({ isLogin }) => {
  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
    confirmPass: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;

    setRegister((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleLoginInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setLogin((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <>
      {!isLogin && (
        <div className="flex w-1/2 bg-[#121420] rounded-3xl rounded-r-[1.8rem] shadow-2xl">
          <div className="flex-1 py-20 rounded-3xl">
            <span className="text-white text-3xl font-bold text-center w-full block mb-6">
              Registrati
            </span>
            <form>
              <div className="flex flex-col gap-5 items-center">
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={register.email}
                  handlerFunc={handleRegisterInputChange}
                  autoComplete="email"
                />
                <FormInput
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={register.username}
                  handlerFunc={handleRegisterInputChange}
                  autoComplete="username"
                />
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={register.password}
                  handlerFunc={handleRegisterInputChange}
                  autoComplete="new-password"
                />
                <FormInput
                  type="password"
                  name="confirmPass"
                  placeholder="Conferma password"
                  value={register.confirmPass}
                  handlerFunc={handleRegisterInputChange}
                  autoComplete="new-password"
                />
                <FormButton text="Registrati" isFilled={true} marginTop="4" />
              </div>
            </form>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-6 bg-[#F0C039] rounded-r-3xl rounded-tl-[160px] rounded-bl-[120px]">
            <span className="text-3xl font-bold">Hai già un account?</span>
            <FormButton text="Login" isFilled={false} path="/login" />
          </div>
        </div>
      )}
      {isLogin && (
        <div className="flex w-1/2 bg-[#121420] rounded-3xl rounded-r-[1.8rem] shadow-2xl">
          <div className="flex-1 py-[118px] rounded-3xl">
            <span className="text-white text-3xl font-bold text-center w-full block mb-6">
              Login
            </span>
            <form>
              <div className="flex flex-col gap-5 items-center">
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={login.email}
                  handlerFunc={handleLoginInputChange}
                  autoComplete="email"
                />
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={login.password}
                  handlerFunc={handleLoginInputChange}
                  autoComplete="new-password"
                />
                <FormInput
                  type="checkbox"
                  name="remember"
                  checked={login.remember}
                  handlerFunc={handleLoginInputChange}
                  text="Resta connesso"
                />
                <FormButton text="Login" isFilled={true} marginTop="4" />
              </div>
            </form>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-6 bg-[#F0C039] rounded-r-3xl rounded-tl-[160px] rounded-bl-[120px]">
            <span className="text-3xl font-bold">Non hai un account?</span>
            <FormButton text="Registrati" isFilled={false} path="/register" />
          </div>
        </div>
      )}
    </>
  );
};
