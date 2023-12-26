import { useLoaderData } from "react-router-dom";
import { Product } from "../components";
import { nanoid } from "nanoid";

const ProductsLayout = () => {
  const { products } = useLoaderData();

  return (
    <section className="productsLayout">
      {products.map((product) => {
        return <Product key={nanoid()} {...product} />;
      })}
    </section>
  );
};
export default ProductsLayout;
