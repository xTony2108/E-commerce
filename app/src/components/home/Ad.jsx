import clsx from "clsx";
import { Buttons } from "../buttons/Buttons";

export const Ad = ({ heading, paragraph, bgImage }) => {
  return (
    <div className="flex-1 relative bgContainer overflow-hidden">
      <div
        className={clsx(
          "absolute top-0 left-0 bottom-0 right-0 bg-center bg-cover dark:opacity-70 scaleBg",
          bgImage && bgImage
        )}
      ></div>
      <div className="py-32 relative z-20 ml-20">
        <h2 className="text-dark text-4xl mb-6">{heading}</h2>
        <span className="text-dark text-lg font-semibold inline-block mb-12 w-3/4">
          {paragraph}
        </span>
        <div className="flex gap-4">
          <Buttons orange={true} text="Compra adesso" />
          <Buttons orange={false} text="Compra adesso" />
        </div>
      </div>
    </div>
  );
};
