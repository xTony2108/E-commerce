import { Form } from "../components/Form";

export const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-svh bg-primary">
        <Form isLogin={false} />
      </div>
    </>
  );
};
