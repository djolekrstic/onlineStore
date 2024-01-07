// Importing necessary dependencies from external modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumbs,
  CartTotalPrice,
  Heading,
  Pagination,
} from "../components";
import { ProductsCartLayout } from "../layout";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const items = cartItems.length;

  // State for current page
  let [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 5;

  // State for total number of pages
  let [pageNumber, setPageNumber] = useState(Math.ceil(items / itemsPerPage));

  // State to track whether it's the first render
  let [firstRender, setFirstRender] = useState(true);

  // Effect to update page number and handle edge cases
  useEffect(() => {
    if (!firstRender) {
      // Recalculate page number based on items and items per page
      setPageNumber(Math.ceil(items / itemsPerPage));

      // Adjust current page if necessary
      if (currentPage !== 1 && items % itemsPerPage === 0) {
        setCurrentPage(currentPage - 1);
      }
    }
    // Set first render to false after the initial render
    setFirstRender(false);
  }, [items, currentPage, firstRender]);

  // Array to store page numbers for pagination
  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }

  // Function to handle page number submission
  const handleSubmitNum = (event, pageNum) => {
    event.preventDefault();
    // Check for undefined and update current page
    if (pageNum !== undefined && pageNum >= 1 && pageNum <= pageNumber) {
      setCurrentPage(pageNum);
    }
  };

  // Render message if cart is empty
  if (items === 0) {
    return (
      <section className="margin-top empty-pages">
        <Heading content="There are no games in your cart." />
      </section>
    );
  }

  // Render cart section with breadcrumbs, product layout, pagination, total price, and clean cart button
  return (
    <section className="margin-top-2em cart">
      <div>
        <Breadcrumbs name="Cart" />
      </div>
      <div className="cart-details">
        <div className="cart-details-products">
          <ProductsCartLayout
            page_num_param={Number(currentPage) - 1}
            pageNumber={Number(pageNumber)}
            itemsPerPage={Number(itemsPerPage)}
          />
          <div className="margin-top products-pagination">
            {/* Render pagination component if there is more than one page */}
            {pageNumber > 1 && (
              <Pagination
                handleSubmit={handleSubmitNum}
                page_num_param={Number(currentPage)}
                pages={pages}
              />
            )}
          </div>
        </div>
        <div>
          <CartTotalPrice />
        </div>
      </div>
      <div>
        <div className="remove-wishlist">
          {/* Button to clear the cart */}
          <button
            className="remove-wishlist-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clean cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Cart);
