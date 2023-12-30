import { HeroCarousel, HeroAdd, HeroSupport } from "../components";
import { useLoaderData } from "react-router-dom";

const Hero = () => {
  const { genres } = useLoaderData();

  return (
    <section className="hero margin-top-2em">
      <div className="hero-up">
        <div className="hero-carousel">
          <HeroCarousel />
        </div>
        <div className="hero-add">
          <HeroAdd {...genres[9]} sale={50} />
          <HeroAdd {...genres[1]} sale={50} />
          <HeroAdd {...genres[2]} sale={50} />
          <HeroAdd {...genres[10]} sale={50} />
        </div>
      </div>
      <div className="hero-down">
        <HeroSupport />
      </div>
    </section>
  );
};
export default Hero;
