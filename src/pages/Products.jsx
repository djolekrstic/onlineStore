import { Form, useLoaderData, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components";
import { ProductsLayout } from "../layout";
import { nanoid } from "nanoid";
import { useState } from "react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let [pageSizeParam, setPageSizeParam] = useState();
  const genre = searchParams.get("genre") || "";
  const search_key = searchParams.get("search_key") || "";
  const page_size_param = searchParams.get("page_size") || "";
  const { productsGenre } = useLoaderData();
  const pageSizes = [20, 16, 8, 4];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({
      genre,
      search_key,
      page_size: pageSizeParam || "",
    });
  };

  return (
    <section className="margin-top-2em">
      <div className="products-heading">
        <Breadcrumbs productsGenre={productsGenre} />
        <Form onChange={handleSubmit}>
          <select
            name="page_size"
            onChange={(event) => {
              setPageSizeParam((pageSizeParam = event.currentTarget.value));
            }}
          >
            {pageSizes.map((size) => {
              return (
                <option
                  key={nanoid()}
                  value={size}
                  selected={size == page_size_param ? true : false}
                >
                  {size}
                </option>
              );
            })}
          </select>
        </Form>
      </div>
      <div className="products">
        <ProductsLayout />
      </div>
    </section>
  );
};
export default Products;
