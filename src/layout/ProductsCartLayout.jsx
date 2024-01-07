import { useSelector } from "react-redux";
import { ProductCart } from "../components";
import { nanoid } from "nanoid";
import React from "react";

const ProductsCartLayout = ({ page_num_param, pageNumber, itemsPerPage }) => {
  const products = useSelector((state) => state.cartState.cartItems);

  let productsNumber = products.length;
  let pages = [];
  let nextIndex = 0;

  const handlePages = (pageNumber) => {
    for (let i = 1; i <= pageNumber; ++i) {
      let page = [];
      for (let j = 1; j <= itemsPerPage; ++j) {
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
    <section className="productsCartLayout">
      {pages[page_num_param].map((item) => {
        if (item != undefined) {
          return <ProductCart key={nanoid()} product={item} />;
        }
      })}
    </section>
  );
};
export default React.memo(ProductsCartLayout);
