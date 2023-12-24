import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../components";
import { ProductsLayout } from "../layout";

const Products = () => {
  const { productsGenre } = useLoaderData();

  return (
    <section className="margin-top-2em">
      <div className="products-heading">
        <Breadcrumbs productsGenre={productsGenre} />
        page_size
      </div>
      <div className="products">
        <ProductsLayout />
      </div>
    </section>
  );
};
export default Products;
