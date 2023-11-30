import { NavLink, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { nanoid } from "nanoid";

const HeroCarousel = () => {
  const { genres } = useLoaderData();

  const slideNames = ["Action", "Family", "Sports", "Racing"];
  const slideGenres = genres.filter(({ name }) => slideNames.includes(name));

  const settings = {
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {slideGenres.map(({ name, games_count, image_background }) => {
        return (
          <div key={nanoid()} className="genre">
            <div>
              <img src={image_background} width="1200" height="700" />
              <div className="genre-image-color"></div>
            </div>
            <div className="genre-info">
              <h2 className="genre-info-name">{name}</h2>
              <p className="genre-info-details">
                We have more than {Math.floor(games_count / 1000)}k+ games from
                <br />
                {name} genre in our store!
              </p>
              <NavLink className="genre-info-link">Check now</NavLink>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default HeroCarousel;
