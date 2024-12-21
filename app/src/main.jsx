import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
  faMagnifyingGlass,
  faCartShopping,
  faHome,
  faGreaterThan,
  faStar,
  faCaretDown,
  faCaretRight,
  faBasketShopping,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store.js";

library.add(
  faEye,
  faEyeSlash,
  faArrowLeft,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faHome,
  faGreaterThan,
  faStar,
  faCaretDown,
  faCaretRight,
  faBasketShopping,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTrashCan
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
