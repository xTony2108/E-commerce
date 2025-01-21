import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeading } from "../components/layout/PageHeading";
import { PageLocation } from "../components/layout/PageLocation";
import { Form } from "../components/shared/Form";

export const Register = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-fullWithoutBars bg-black py-20 px-6">
        <PageHeading page="Registrati"/>
        <PageLocation pages={["Registrati"]} />
        <Form isLogin={false} />
      </div>
      <Footer />
    </>
  );
};
