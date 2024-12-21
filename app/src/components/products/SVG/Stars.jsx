import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GradientStar } from "./GradientStar";
import { EmptyStar } from "./EmptyStar";

export const Stars = ({ product, isReview }) => {
  const starsArray = Array.from({ length: 5 });

  const calculateAverageStars = (reviews) => {
    const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
    const avg = (totalStars / reviews.length).toFixed(2);
    const [integer, decimal] = avg.split(".");
    if (decimal === "00") {
      return { int: Number(integer) };
    } else {
      return { int: Number(integer), dec: Number(decimal) };
    }
  };
  return (
    <>
      {!isReview ? (
        <div className="my-4 flex gap-0.5">
          {starsArray.map((_, i) => {
            const stars = calculateAverageStars(product.reviews);
            return i + 1 <= stars.int ? (
              <span key={product.reviews._id + String(i) + new Date()}>
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  style={{ color: "#ed8a19", display: "block" }}
                />
              </span>
            ) : i + 1 - stars.int === 1 && stars?.dec ? (
              <span key={product.reviews._id + String(i) + new Date()}>
                <GradientStar decimals={stars.dec} />
              </span>
            ) : (
              <span key={product.reviews._id + String(i) + new Date()}>
                <EmptyStar />
              </span>
            );
          })}
        </div>
      ) : (
        <div className="my-4 flex gap-0.5">
          {starsArray.map((_, i) => {
            console.log(product);
            return i + 1 <= product.stars ? (
              <span key={product._id + String(i) + new Date()}>
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  style={{ color: "#ed8a19", display: "block" }}
                />
              </span>
            ) : (
              <span key={product._id + String(i) + new Date()}>
                <EmptyStar />
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};
