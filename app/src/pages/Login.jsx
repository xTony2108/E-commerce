import { Form } from "../components/Form";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-svh bg-primary">
        <Form isLogin={true} />
      </div>
    </>
  );
};
