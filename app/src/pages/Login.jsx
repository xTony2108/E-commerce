import { Form } from "../components/Form";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-svh bg-[#00C6C1]">
        <Form isLogin={true} />
      </div>
    </>
  );
};
