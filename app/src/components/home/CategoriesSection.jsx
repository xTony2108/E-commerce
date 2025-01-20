import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryImages } from "../../constants/categoryImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { getCategories } from "../../utility/getCategories";
import { setCategory } from "../../features/category/categorySlice";

export const CategoriesSection = () => {
  const dispatch = useDispatch();
  const checkCategory = (category) => {
    const Image = categoryImages[category.toLowerCase()];

    if (Image) {
      return <Image />;
    } else return null;
  };

  const categories = getCategories(true);

  return (
    <div className="bg-black py-32">
      <div className="max-w-screen-2xl m-auto max-2xl:max-w-screen-lg">
        <div className="flex justify-center items-center gap-4">
          <span className="orangeDot"></span>
          <h2 className="text-white text-4xl text-center">
            Le nostre categorie
          </h2>
          <span className="orangeDot"></span>
        </div>

        <div className="mt-20">
          <Swiper slidesPerView={6} loop={true}>
            {categories &&
              categories.map((category, i) => (
                <SwiperSlide key={category + i + new Date()}>
                  <Link
                    onClick={() => dispatch(setCategory(category))}
                    to={`/products`}
                    className="select-none flex flex-col gap-4 items-center text-white  hover:text-primary hover:fill-primary fill-white transition-all stroke-white hover:stroke-primary"
                  >
                    <div className="border border-border p-5 rounded-full">
                      <div className="flex w-40 h-40 bg-[#191919] rounded-full p-6">
                        {checkCategory(category)}
                      </div>
                    </div>
                    <span className="uppercase font-medium font-prosto">
                      {category}
                    </span>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
