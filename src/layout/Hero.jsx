import { HeroCarousel, HeroAdd, HeroSupport } from "../components";
import { useLoaderData } from "react-router-dom";

const Hero = () => {
  const { genres } = useLoaderData();

  return (
    <section className="hero">
      <div className="hero-up">
        <div className="hero-carousel">
          <HeroCarousel />
        </div>
        <div className="hero-add">
          <HeroAdd {...genres[9]} sale={30} />
          <HeroAdd {...genres[1]} sale={60} />
          <HeroAdd {...genres[2]} sale={10} />
          <HeroAdd {...genres[10]} sale={40} />
        </div>
      </div>
      <div className="hero-down">
        <HeroSupport />
      </div>
    </section>
  );
};
export default Hero;
