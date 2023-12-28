import { Form } from "react-router-dom";
import { nanoid } from "nanoid";
import { useState } from "react";

const ProductPerPage = ({ handleSubmit, page_size_param }) => {
  let [pageSizeParam, setPageSizeParam] = useState();
  const pageSizes = [20, 16, 8, 4];

  return (
    <Form onChange={(event) => handleSubmit(event, pageSizeParam)}>
      <select
        name="page_size"
        value={page_size_param || pageSizeParam}
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
  );
};
export default ProductPerPage;
