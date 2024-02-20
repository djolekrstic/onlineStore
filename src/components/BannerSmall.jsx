import { Link, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import React from "react";

const BannerSmall = ({ genre, ad }) => {
  const { genres } = useLoaderData();

  const slideNames = [genre];
  const slideGenres = genres.filter(({ name }) => slideNames.includes(name));

  return (
    <section className="banner">
      <Link to={`products/?genre=${genre}`}>
        <div>
          <div className="banner-small-background">
            {slideGenres.map(({ image_background }) => {
              return (
                <img key={nanoid()} src={image_background} alt="Banner image" />
              );
            })}
          </div>
          <div className="banner-background-color"></div>
        </div>
        <div className="banner-text">
          <div className="banner-text-div">
            <p className="banner-text-smallBanner">{ad}</p>
          </div>
        </div>
      </Link>
    </section>
  );
};
export default React.memo(BannerSmall);
