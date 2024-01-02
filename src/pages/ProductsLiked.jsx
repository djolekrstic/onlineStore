// Importing necessary dependencies from external modules
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

// Defining the main component for displaying liked products
const ProductsLiked = () => {
  // Initializing Redux dispatch hook
  const dispatch = useDispatch();

  // Retrieving the number of liked products from the Redux store
  const productsLikedNum = useSelector(
    (state) => state.likedState.numItemsInLiked || 0
  );

  // State variables for managing pagination and layout
  let [pageNumber, setPageNumber] = useState(Math.ceil(productsLikedNum / 20));
  let [pageSizeParamLayout, setPageSizeParamLayout] = useState(20);
  let [page_num_param, setPage_Num_Param] = useState(1);
  let [firstRender, setFirstRender] = useState(true);

  // Effect to update pagination when the number of liked products changes
  useEffect(() => {
    // Update page number and adjust page_num_param when productsLikedNum changes
    if (!firstRender) {
      setPageNumber(Math.ceil(productsLikedNum / pageSizeParamLayout));
      if (page_num_param != 1) {
        setPage_Num_Param(page_num_param - 1);
      }
    }
    setFirstRender(false);
  }, [productsLikedNum]);

  // Generating an array of page numbers for pagination
  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }

  // Event handler for submitting page size changes
  const handleSubmitSize = (event, pageSizeParam) => {
    event.preventDefault();
    try {
      // Update pageSizeParamLayout and recalculate page number
      setPageSizeParamLayout((pageSizeParamLayout = pageSizeParam));
      setPageNumber(
        (pageNumber = Math.ceil(productsLikedNum / pageSizeParamLayout))
      );
    } catch (error) {
      console.error("Error while handling page size change:", error);
    }
  };

  // Event handler for submitting page number changes
  const handleSubmitNum = (event, pageNumParam) => {
    event.preventDefault();
    try {
      // Update page_num_param
      if (pageNumParam != undefined) {
        setPage_Num_Param((page_num_param = pageNumParam));
      }
    } catch (error) {
      console.error("Error while handling page number change", error);
    }
  };

  // Conditional rendering in case there are no liked products
  if (pages.length == 0) {
    return (
      <section className="margin-top empty-pages">
        <Heading content="There are no games in your wishlist." />
      </section>
    );
  }

  // Main rendering of the ProductsLiked component
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
            try {
              dispatch(removeAll());
            } catch (error) {
              console.error("Error while cleaning wishlist:", error);
            }
          }}
        >
          Clean wishlist
        </button>
      </div>
    </section>
  );
};

// Exporting the ProductsLiked component as the default export
export default ProductsLiked;
