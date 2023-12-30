import { useLoaderData } from "react-router-dom";
import { SingleProductDetails, SingleProductInfo } from "../layout";
import { ProductsSlider } from "../components";

const SingleProduct = () => {
  const { product } = useLoaderData();

  return (
    <main className="margin-top-2em">
      <SingleProductDetails product={product} />
      <SingleProductInfo {...product} />
      <ProductsSlider name="You Might Also Like" start={13} end={23} />
    </main>
  );
};
export default SingleProduct;
