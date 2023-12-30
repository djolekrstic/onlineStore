import ReactStars from "react-stars";
import { Breadcrumbs } from "../components";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addLiked } from "../features/liked/likedSlice";
import { addItem } from "../features/cart/cartSlice";
import { useState } from "react";
import { Form } from "react-router-dom";

const SingleProductDetails = ({ product }) => {
  const {
    id,
    name,
    genres,
    background_image,
    rating,
    description_raw,
    ratings_count,
    released,
    platforms,
  } = product;

  let [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const likedID =
    useSelector((state) => state.likedState.likedItems).filter(
      (item) => item.id == id
    )[0]?.id == id;

  const short_description = description_raw.substring(
    0,
    description_raw.substring(0, 500).lastIndexOf(".") + 1
  );
  const date = released?.split("-") || "N/A";

  let price =
    rating < 2.5
      ? 5.99
      : Math.ceil(
          (date[0] > 2015 ? 60 : 20) +
            (date[0] >= 2019 ? 15 : 0) +
            (date[0] < 2011 ? -15 : 0) +
            Number(rating || 3.5) +
            platforms?.length
        ) + 0.99;

  return (
    <section className="singleProductDetails">
      <Breadcrumbs name={name} productsGenre={genres[0].name} />
      <div className="singleProductDetails-info">
        <div className="singleProductDetails-image">
          <img src={background_image} alt={name} />
        </div>
        <div className="singleProductDetails-data">
          <div className="singleProductDetails-basicInfo">
            <h6>{name}</h6>
            <div className="singleProductDetails-rating">
              <ReactStars value={rating} edit={false} size={24} />
              <p>({ratings_count} reviews)</p>
            </div>
            <div className="singleProductDetails-price">
              <p className="singleProductDetails-price-full">${price}</p>
              <p className="singleProductDetails-price-discounted">
                ${(price * 0.5).toFixed(2)}
              </p>
              <p className="singleProductDetails-price-discount">Save 50%</p>
            </div>
          </div>
          <p className="singleProductDetails-short_description">
            {short_description}
          </p>
          <div className="singleProductDetails-divider"></div>
          <Form className="singleProductDetails-quantity">
            <input
              type="number"
              name="quantity"
              id="quantity"
              defaultValue={1}
              min={1}
              onChange={(e) => setAmount((amount = e.currentTarget.value))}
            />
            <button
              type="button"
              onClick={() =>
                dispatch(
                  addItem({
                    product,
                    price: (price * 0.5).toFixed(2),
                    amount,
                  })
                )
              }
            >
              ADD TO CART
            </button>
          </Form>
          <div className="singleProductDetails-wishlist">
            <button
              type="button"
              style={likedID ? { color: "var(--color-alert)" } : {}}
              onClick={() => dispatch(addLiked({ product }))}
            >
              <BsHeart />
              {likedID ? "Added to wishlist" : "Add to wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProductDetails;
