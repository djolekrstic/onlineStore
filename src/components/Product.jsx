import ReactStars from "react-stars";
import { nanoid } from "nanoid";
import { months } from "../data";
import { BsApple, BsPlaystation, BsWindows, BsXbox } from "react-icons/bs";
import { FaLinux } from "react-icons/fa6";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLiked } from "../features/liked/likedSlice";
import { addItem } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  const { id, name, released, background_image, rating, platforms } =
    product || {};
  const dispatch = useDispatch();
  const likedID =
    useSelector((state) => state.likedState.likedItems).filter(
      (item) => item.id == id
    )[0]?.id == id;

  const selectedCurrency = useSelector((state) => state.userState.currency);

  const icons = {
    PC: <BsWindows />,
    macOS: <BsApple />,
    Linux: <FaLinux />,
    "PlayStation 4": <BsPlaystation />,
    "Xbox 360": <BsXbox />,
  };
  const date = released?.split("-") || "N/A";
  const number = Number(date[1]);
  const platformList = platforms?.map(({ platform }) => platform.name);
  const platformIcons = [];
  platformList?.map((platform) =>
    Object.keys(icons).forEach((key, index) => {
      if (key == platform) platformIcons.push(Object.values(icons)[index]);
    })
  );
  const shortName = name?.split(":")[0].substring(0, 23);

  let selectedCurrencyValue = 1;
  let selectedCurrencySign = "$";
  const handleCurrency = (selectedCurrency) => {
    if (selectedCurrency === "RSD") {
      selectedCurrencyValue = 107;
      selectedCurrencySign = "RSD ";
    }
    if (selectedCurrency === "EUR") {
      selectedCurrencyValue = 0.9;
      selectedCurrencySign = "€";
    }
  };
  handleCurrency(selectedCurrency);

  let price =
    rating < 2.5
      ? 5.99 * selectedCurrencyValue
      : Math.ceil(
          ((date[0] > 2015 ? 60 : 20) +
            (date[0] >= 2019 ? 15 : 0) +
            (date[0] < 2011 ? -15 : 0) +
            Number(rating || 3.5) +
            platforms?.length) *
            selectedCurrencyValue
        ) + 0.99;

  return (
    <article className="product">
      <div className="product-image">
        <img src={background_image} alt={name} />
      </div>
      <div className="product-info">
        <Link to={`/products/${id}`}>
          <h5 className="product-info-name">{shortName}</h5>
        </Link>
        <div className="product-info-section">
          <h6>Released: </h6>
          <p>{`${months[number - 1]} ${date[2]}, ${date[0]}`}</p>
        </div>
        <div className="product-info-section">
          <h6>Platform: </h6>
          <ul>
            {platformIcons.map((icon) => (
              <li key={nanoid()}>{icon}</li>
            ))}
          </ul>
        </div>
        <div className="product-info-rating">
          <h6>Rating: </h6>
          <ReactStars value={rating} edit={false} size={24} />
        </div>
        <div className="product-info-price">
          <p>
            {selectedCurrencySign}
            {price.toFixed(2)}
          </p>
        </div>
        <div className="product-info-buttons">
          <button
            className="product-info-buttons-cart"
            onClick={() => {
              dispatch(
                addItem({ product, price: price.toFixed(2), amount: 1 })
              );
            }}
          >
            add to cart
          </button>
          <BsHeartFill
            className="product-info-buttons-liked"
            style={likedID ? { color: "var(--color-alert)" } : {}}
            onClick={() => {
              dispatch(
                addLiked({
                  product,
                })
              );
            }}
          />
        </div>
      </div>
    </article>
  );
};
export default Product;
