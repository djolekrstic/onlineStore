import ReactStars from "react-stars";
import { Breadcrumbs } from "../components";
import { BsHeart } from "react-icons/bs";

const SingleProductDetails = ({
  name,
  genres,
  background_image,
  rating,
  description_raw,
  ratings_count,
}) => {
  const short_description = description_raw.substring(
    0,
    description_raw.substring(0, 500).lastIndexOf(".") + 1
  );

  return (
    <section className="singleProductDetails">
      <Breadcrumbs name={name} genres={genres} />
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
              <p className="singleProductDetails-price-full">$10.00</p>
              <p className="singleProductDetails-price-discounted">$5.00</p>
              <p className="singleProductDetails-price-discount">Save 50%</p>
            </div>
          </div>
          <p className="singleProductDetails-short_description">
            {short_description}
          </p>
          <div className="singleProductDetails-divider"></div>
          <div className="singleProductDetails-quantity">
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder={1}
              min={1}
            />
            <button type="button">ADD TO CART</button>
          </div>
          <div className="singleProductDetails-wishlist">
            <button type="button">
              <BsHeart />
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProductDetails;
