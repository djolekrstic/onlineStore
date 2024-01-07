import { Product } from "../components";
import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";

const ProductsLikedLayout = ({
  pageSizeParamLayout,
  page_num_param,
  pageNumber,
}) => {
  const products = useSelector((state) => state.likedState.likedItems);

  let productsNumber = products.length;
  let pages = [];
  let nextIndex = 0;

  const handlePages = (pageNumber) => {
    for (let i = 1; i <= pageNumber; ++i) {
      let page = [];
      for (let j = 1; j <= pageSizeParamLayout; ++j) {
        page = [...page, products[nextIndex]];
        --productsNumber;
        ++nextIndex;
        if (productsNumber == 0) {
          break;
        }
      }
      pages.push(page);
    }
  };
  handlePages(pageNumber);

  return (
    <section className="productsLayout">
      {pages[page_num_param].map((item) => {
        return <Product key={nanoid()} product={item} />;
      })}
    </section>
  );
};
export default React.memo(ProductsLikedLayout);
