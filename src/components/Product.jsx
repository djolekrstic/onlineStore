import ReactStars from "react-stars";
import { nanoid } from "nanoid";
import { months } from "../data";
import { BsApple, BsPlaystation, BsWindows, BsXbox } from "react-icons/bs";
import { FaLinux } from "react-icons/fa6";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({
  id,
  name,
  released,
  background_image,
  rating,
  platforms,
}) => {
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
  platformList.map((platform) =>
    Object.keys(icons).forEach((key, index) => {
      if (key == platform) platformIcons.push(Object.values(icons)[index]);
    })
  );
  const shortName = name?.split(":")[0].substring(0, 23);

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
          <p>$10.00</p>
        </div>
        <div className="product-info-buttons">
          <button className="product-info-buttons-cart">add to cart</button>
          <BsHeartFill className="product-info-buttons-liked" />
        </div>
      </div>
    </article>
  );
};
export default Product;
