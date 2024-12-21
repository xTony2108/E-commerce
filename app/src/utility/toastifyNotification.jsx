import { Flip, toast } from "react-toastify";

export const notifyErrors = (errors) => {
  toast.error(<ErrorNotification errors={errors} />, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
};

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
};

export const notifyError = (error) => {
  toast.error(error, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
};
