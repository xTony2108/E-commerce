import { HeroSection } from "../components/HeroSection";
import { Description } from "../components/Description";
import { SecondDescription } from "../components/SecondDescription";
import { ThirdDescription } from "../components/ThirdDescription";
import { BottomCta } from "../components/BottomCta";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <main>
        <div className="bg-primary py-32">
          <div className="max-w-screen-2xl m-auto max-2xl:max-w-screen-lg">
            <Description />
            <SecondDescription />
            <ThirdDescription />
          </div>
        </div>
        <FaqSection />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
};
