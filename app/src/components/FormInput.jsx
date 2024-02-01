import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

export const FormInput = ({
  type,
  name,
  placeholder,
  value,
  handlerFunc,
  autoComplete,
  text,
}) => {
  const [showPw, setShowPw] = useState(false);

  const handleShowPw = () => {
    setShowPw(!showPw);
  };

  return (
    <>
      {type !== "checkbox" && type !== "password" && (
        <input
          className="w-4/6 pl-3 rounded-md py-2 outline-none"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handlerFunc}
          autoComplete={autoComplete}
        />
      )}
      {type === "checkbox" && (
        <label htmlFor={name} className="text-white flex items-center gap-1">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handlerFunc}
            autoComplete={autoComplete}
          />
          {text}
        </label>
      )}
      {type === "password" && (
        <div className="bg-white w-4/6 flex items-center rounded-md">
          <input
            className="pl-3 rounded-md py-2 outline-none w-full"
            type={clsx(type, showPw && "text")}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handlerFunc}
            autoComplete={autoComplete}
          />
          <button className="" type="button" onClick={handleShowPw}>
            <FontAwesomeIcon
              icon={clsx("fa-solid fa-eye", showPw && "fa-solid fa-eye-slash")}
              size="lg"
              style={{ color: "#121420", margin: "0px 12px", width: "25px" }}
            />
          </button>
        </div>
      )}
    </>
  );
};
