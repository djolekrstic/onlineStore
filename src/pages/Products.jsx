import { useLoaderData, useSearchParams } from "react-router-dom";
import { Breadcrumbs, Pagination, ProductPerPage } from "../components";
import { ProductsLayout } from "../layout";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const handleSubmitSize = (event, pageSizeParam) => {
    event.preventDefault();
    setSearchParams({
      genre,
      search_key,
      page_size: pageSizeParam || page_size_param,
      page: page_num_param,
    });
  };

  const handleSubmitNum = (event, pageNumParam) => {
    event.preventDefault();
    setSearchParams({
      genre,
      search_key,
      page_size: page_size_param,
      page: pageNumParam || page_num_param,
    });
  };

  return (
    <section className="margin-top">
      <div className="products-heading">
        <Breadcrumbs productsGenre={productsGenre} />
        <ProductPerPage
          handleSubmit={handleSubmitSize}
          page_size_param={page_size_param}
        />
      </div>
      <div className="products">
        <ProductsLayout />
      </div>
      <div className="margin-top products-pagination">
        <Pagination
          handleSubmit={handleSubmitNum}
          page_num_param={page_num_param}
          pages={pages}
        />
      </div>
    </section>
  );
};
export default Products;
