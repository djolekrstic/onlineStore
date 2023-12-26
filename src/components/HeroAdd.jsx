import { Link } from "react-router-dom";

const HeroAdd = ({ name, image_background, sale }) => {
  return (
    <Link className="add" to={`products/?genre=${name}`}>
      <div>
        <img src={image_background} alt={name} className="add-image" />
        <div className="add-image-color"></div>
      </div>
      <div className="add-info">
        <p className="add-info-name">{name}</p>
      </div>
      <div className="add-sale">
        <p>{`-${sale}%`}</p>
      </div>
    </Link>
  );
};
export default HeroAdd;
