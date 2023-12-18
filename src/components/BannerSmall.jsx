import { useLoaderData } from "react-router-dom";

const BannerSmall = ({ genre, ad }) => {
  const { genres } = useLoaderData();

  const slideNames = [genre];
  const slideGenres = genres.filter(({ name }) => slideNames.includes(name));

  return (
    <section className="banner margin-top">
      <div>
        <div className="banner-small-background">
          {slideGenres.map(({ image_background }) => {
            return <img src={image_background} />;
          })}
        </div>
        <div className="banner-background-color"></div>
      </div>
      <div className="banner-text">
        <div className="banner-text-div">
          <p>{ad}</p>
        </div>
      </div>
    </section>
  );
};
export default BannerSmall;
