import { useSelector } from "react-redux";
import { ProductCart } from "../components";
import { nanoid } from "nanoid";

const ProductsCartLayout = () => {
  const products = useSelector((state) => state.cartState.cartItems);

  return (
    <section className="productsCartLayout">
      {products.map((item) => {
        return <ProductCart key={nanoid()} product={item} />;
      })}
    </section>
  );
};
export default ProductsCartLayout;
