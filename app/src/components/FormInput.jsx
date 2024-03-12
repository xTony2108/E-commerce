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
  pattern,
  title,
  maxLength,
  addClass,
}) => {
  const [showPw, setShowPw] = useState(false);

  const handleShowPw = () => {
    setShowPw(!showPw);
  };

  return (
    <>
      {type !== "checkbox" && type !== "password" && (
        <input
          className={clsx(
            "pl-3 rounded-md py-2 outline-none",
            addClass && addClass
          )}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handlerFunc}
          autoComplete={autoComplete}
          pattern={pattern}
          title={title}
          maxLength={maxLength}
          required
        />
      )}
      {type === "checkbox" && (
        <label
          htmlFor={name}
          className="text-white flex items-center gap-1 select-none"
        >
          <input
            type={type}
            id={name}
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
        <div className="bg-white flex items-center rounded-md w-full">
          <input
            className="pl-3 rounded-md py-2 outline-none w-full"
            type={clsx(!showPw && type, showPw && "text")}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handlerFunc}
            autoComplete={autoComplete}
            pattern={pattern}
            title={title}
            required
          />
          <button type="button" onClick={handleShowPw}>
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
