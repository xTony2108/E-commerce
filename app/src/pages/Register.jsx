import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { PageLocation } from "../components/layout/PageLocation";
import { Form } from "../components/shared/Form";

export const Register = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-[calc(100svh-172px)] bg-black py-20">
        <div className="flex items-center justify-center gap-3">
          <span className="relative orangeDot"></span>
          <h2 className="text-white text-4xl font-semibold">Registrati</h2>
          <span className="relative orangeDot"></span>
        </div>
        <PageLocation pages={["Register"]} />
        <Form isLogin={false} />
      </div>
    </>
  );
};
