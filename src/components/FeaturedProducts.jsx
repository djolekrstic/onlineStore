import Slider from "react-slick";
import { nanoid } from "nanoid";
import { useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import Product from "./Product";

const FeaturedProducts = () => {
  const { smallList } = useLoaderData();

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Heading content="Featured Products" />
      <Slider {...settings}>
        {smallList.map((game) => {
          return <Product key={nanoid()} {...game} />;
        })}
      </Slider>
    </div>
  );
};
export default FeaturedProducts;
