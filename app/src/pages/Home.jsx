import { HeroSection } from "../components/HeroSection";
import { Description } from "../components/Description";
import { SecondDescription } from "../components/SecondDescription";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-[#121420] py-32">
        <div className="max-w-screen-lg m-auto">
          <Description />
          <SecondDescription />
        </div>
      </div>
    </>
  );
};
