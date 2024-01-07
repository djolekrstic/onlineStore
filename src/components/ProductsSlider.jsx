import Slider from "react-slick";
import { nanoid } from "nanoid";
import { useLoaderData } from "react-router-dom";
import { Heading, Product } from "./index";
import React from "react";

const ProductsSlider = ({ name, start, end }) => {
  const { smallList } = useLoaderData();

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="margin-top productsSlider">
      <Heading content={name} />
      <Slider {...settings}>
        {smallList.map((game, i) => {
          if (i <= end && i >= start) {
            return <Product key={nanoid()} product={game} />;
          }
        })}
      </Slider>
    </div>
  );
};
export default React.memo(ProductsSlider);
