import { useLoaderData } from "react-router-dom";
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
      {slideGenres.map((genre) => {
        return (
          <div key={nanoid()} className="genre">
            <div>
              <img src={genre.image_background} width="1200" />
              <div className="genre-image-color"></div>
            </div>
            <div className="genre-info">
              <h2 className="genre-info-name">{genre.name}</h2>
              <p className="genre-info-details">
                We have more than {Math.ceil(genre.games_count / 1000 - 1)}k+
                games from <br />
                {genre.name} genre in our store!
              </p>
              <button className="genre-info-button">Check now</button>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default HeroCarousel;
