import { ToastContainer } from "react-toastify";
import { Form } from "../components/Form";

export const Login = () => {
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
        toastStyle={{ backgroundColor: "#121420", color: "white" }}
      />
      <div className="flex justify-center items-center min-h-svh bg-[#00C6C1]">
        <Form isLogin={true} />
      </div>
    </>
  );
};
