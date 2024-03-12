export const isFormCompiled = (state, page) => {
  const {
    email,
    name,
    surname,
    password,
    country,
    address,
    zipCode,
    phone,
    civic,
  } = state;

  if (page === 1) {
    return (
      email === "" ||
      email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ===
        null ||
      name === "" ||
      surname === "" ||
      password === "" ||
      password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      ) === null
    );
  } else {
    return (
      country === "" ||
      address === "" ||
      address.match(/^[a-zA-Z0-9\s,'-]+$/) === null ||
      civic === "" ||
      civic.match(/^\d+$/) === null ||
      zipCode === "" ||
      zipCode.match(/^\d{5}$/) === null ||
      phone === ""
    );
  }
};
