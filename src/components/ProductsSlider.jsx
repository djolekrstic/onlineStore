import Slider from "react-slick";
import { nanoid } from "nanoid";
import { useLoaderData } from "react-router-dom";
import { Heading, Product } from "./index";

const ProductsSlider = ({ name, start, end }) => {
  const { smallList } = useLoaderData();

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="margin-top">
      <Heading content={name} />
      <Slider {...settings}>
        {smallList.map((game, i) => {
          if (i <= end && i >= start) {
            return <Product key={nanoid()} {...game} />;
          }
        })}
      </Slider>
    </div>
  );
};
export default ProductsSlider;
