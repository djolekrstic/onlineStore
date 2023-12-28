import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumbs,
  Heading,
  Pagination,
  ProductPerPage,
} from "../components";
import { useEffect, useState } from "react";
import { ProductsLikedLayout } from "../layout";
import { removeAll } from "../features/liked/likedSlice";

const ProductsLiked = () => {
  const dispatch = useDispatch();
  const productsLikedNum = useSelector(
    (state) => state.likedState.numItemsInLiked
  );

  let [pageNumber, setPageNumber] = useState(Math.ceil(productsLikedNum / 20));
  let [pageSizeParamLayout, setPageSizeParamLayout] = useState(20);
  let [page_num_param, setPage_Num_Param] = useState(1);
  let [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) {
      setPageNumber(Math.ceil(productsLikedNum / pageSizeParamLayout));
      if (page_num_param != 1) {
        setPage_Num_Param(page_num_param - 1);
      }
    }
    setFirstRender(false);
  }, [productsLikedNum]);

  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }

  const handleSubmitSize = (event, pageSizeParam) => {
    event.preventDefault();
    setPageSizeParamLayout((pageSizeParamLayout = pageSizeParam));
    setPageNumber(
      (pageNumber = Math.ceil(productsLikedNum / pageSizeParamLayout))
    );
  };

  const handleSubmitNum = (event, pageNumParam) => {
    event.preventDefault();
    setPage_Num_Param((page_num_param = pageNumParam));
  };

  if (pages.length == 0) {
    return (
      <section
        className="margin-top"
        style={{
          width: "100%",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading content="There are no games in your wishlist." />
      </section>
    );
  }

  return (
    <section className="margin-top">
      <div className="products-heading">
        <Breadcrumbs name="Wishlist" />
        <ProductPerPage handleSubmit={handleSubmitSize} />
      </div>
      <div className="products">
        <ProductsLikedLayout
          pageSizeParamLayout={Number(pageSizeParamLayout)}
          page_num_param={Number(page_num_param) - 1}
          pageNumber={Number(pageNumber)}
        />
      </div>
      <div className="margin-top products-pagination">
        <Pagination
          handleSubmit={handleSubmitNum}
          page_num_param={Number(page_num_param)}
          pages={pages}
        />
      </div>
      <div className="remove-wishlist">
        <button
          className="remove-wishlist-btn"
          onClick={() => {
            dispatch(removeAll());
          }}
        >
          Clean wishlist
        </button>
      </div>
    </section>
  );
};
export default ProductsLiked;
