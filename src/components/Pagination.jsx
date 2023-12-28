import { nanoid } from "nanoid";
import { useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { Form } from "react-router-dom";

const Pagination = ({ handleSubmit, page_num_param, pages }) => {
  let [pageNumParam, setPageNumParam] = useState();

  return (
    <Form onClick={(event) => handleSubmit(event, pageNumParam)}>
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
                  setPageNumParam((pageNumParam = event.currentTarget.value))
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
  );
};
export default Pagination;
