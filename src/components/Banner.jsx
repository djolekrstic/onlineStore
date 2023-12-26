import { Link, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const Banner = () => {
  const { genres } = useLoaderData();

  const slideNames = ["RPG", "Strategy", "Massively Multiplayer"];
  const slideGenres = genres.filter(({ name }) => slideNames.includes(name));

  return (
    <section className="banner margin-top">
      <Link to="products/?genre=Action">
        <div>
          <div className="banner-background">
            {slideGenres.map(({ image_background }) => {
              return <img key={nanoid()} src={image_background} />;
            })}
          </div>
          <div className="banner-background-color"></div>
        </div>
        <div className="banner-text">
          <div className="banner-text-div">
            <p>
              "Diverse genres, endless thrills - level up your gaming
              experience!"
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};
export default Banner;
