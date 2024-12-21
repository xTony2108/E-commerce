import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { Form } from "../components/shared/Form";
import { PageLocation } from "../components/layout/PageLocation";
import { PageHeading } from "../components/layout/PageHeading";

export const Login = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-[calc(100svh-172px)] bg-black py-20">
        <PageHeading page="Login"/>
        <PageLocation pages={["Login"]} />
        <Form isLogin={true} />
      </div>
    </>
  );
};
