import { notifyError } from "./toastifyNotification";

export const validateInput = (register, page) => {
  const errors = [];

  const validateCommonFields = () => {
    if (
      register.email === "" ||
      register.email.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ) === null
    ) {
      errors.push("• Inserire un indirizzo email valido");
    }
    if (register.name === "") {
      errors.push("• Inserire nome");
    }
    if (register.surname === "") {
      errors.push("• Inserire Cognome");
    }
    if (
      register.password === "" ||
      register.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      ) === null
    ) {
      errors.push(
        "• Password deve contenere una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri"
      );
    }
  };

  if (!page || page === 1) {
    validateCommonFields();
  }

  if (!page || page === 2) {
    if (register.country === "") {
      errors.push("• Inserire paese");
    }
    if (
      register.address === "" ||
      register.address.match(/^[a-zA-Z0-9\s,'-]+$/) === null
    ) {
      errors.push("• Inserire un indirizzo valido");
    }
    if (register.civic === "" || register.civic.match(/^\d+$/) === null) {
      errors.push("• Inserire civico");
    }
    if (register.zipCode === "" || register.zipCode.match(/^\d{5}$/) === null) {
      errors.push("• Inserire cap valido");
    }
    if (
      register.phone === "" ||
      register.phone.match(/^\+?(39|0039)?[ ]?[0-9]{2,4}[ ]?[0-9]{6,8}$/) ===
        null
    ) {
      errors.push("• Inserire numero di cellulare valido");
    }
  }

  if (errors.length > 0) {
    notifyError(errors);
  }
};
