import { useLoaderData } from "react-router-dom";
import { Product } from "../components";
import { nanoid } from "nanoid";
import React from "react";

const ProductsLayout = () => {
  const { products } = useLoaderData();

  return (
    <section className="productsLayout">
      {products.map((product) => {
        return <Product key={nanoid()} product={product} />;
      })}
    </section>
  );
};
export default React.memo(ProductsLayout);
