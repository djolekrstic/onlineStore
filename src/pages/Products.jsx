import { Form, useLoaderData, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components";
import { ProductsLayout } from "../layout";
import { nanoid } from "nanoid";
import { useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let [pageSizeParam, setPageSizeParam] = useState();
  let [pageNumParam, setPageNumParam] = useState();

  const genre = searchParams.get("genre") || "";
  const search_key = searchParams.get("search_key") || "";
  const page_size_param = Number(searchParams.get("page_size") || "");
  const page_num_param = Number(searchParams.get("page") || 1);

  const { productsGenre, count } = useLoaderData();

  let pageSizeCount = page_size_param || 20;
  let numberOfPages = Math.ceil(count / pageSizeCount);
  let pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    if (i <= 500) {
      pages.push(i);
    }
  }

  const pageSizes = [20, 16, 8, 4];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({
      genre,
      search_key,
      page_size: pageSizeParam || page_size_param,
      page: pageNumParam || page_num_param,
    });
  };

  return (
    <section className="margin-top">
      <div className="products-heading">
        <Breadcrumbs productsGenre={productsGenre} />
        <Form onChange={handleSubmit}>
          <select
            name="page_size"
            value={page_size_param}
            onChange={(event) => {
              setPageSizeParam((pageSizeParam = event.currentTarget.value));
            }}
          >
            {pageSizes.map((size) => {
              return (
                <option key={nanoid()} value={size}>
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
      <div className="margin-top products-pagination">
        <Form onClick={handleSubmit}>
          <div className="products-pagination-buttons">
            {page_num_param == 1 ? (
              ""
            ) : (
              <>
                <button
                  name="page"
                  onClick={() => setPageNumParam((pageNumParam = 1))}
                >
                  <BsChevronDoubleLeft />
                </button>
                <button
                  name="page"
                  onClick={() =>
                    setPageNumParam((pageNumParam = page_num_param - 1))
                  }
                >
                  <BsArrowLeft />
                </button>
              </>
            )}
            {pages.map((pageNum) => {
              if (
                page_num_param == pageNum ||
                page_num_param - 2 == pageNum ||
                page_num_param - 1 == pageNum ||
                page_num_param + 1 == pageNum ||
                page_num_param + 2 == pageNum
              ) {
                return (
                  <button
                    name="page"
                    key={nanoid()}
                    value={pageNum}
                    style={
                      page_num_param == pageNum
                        ? { backgroundColor: "var(--color-primary)" }
                        : {}
                    }
                    onClick={(event) =>
                      setPageNumParam(
                        (pageNumParam = event.currentTarget.value)
                      )
                    }
                  >
                    {pageNum}
                  </button>
                );
              }
            })}
            {page_num_param == pages.length ? (
              ""
            ) : (
              <>
                <button
                  name="page"
                  onClick={() =>
                    setPageNumParam((pageNumParam = page_num_param + 1))
                  }
                >
                  <BsArrowRight />
                </button>
                <button
                  name="page"
                  onClick={() => setPageNumParam((pageNumParam = pages.length))}
                >
                  <BsChevronDoubleRight />
                </button>
              </>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};
export default Products;
