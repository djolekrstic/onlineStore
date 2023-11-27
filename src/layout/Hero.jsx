import HeroCarousel from "../components/HeroCarousel";
import HeroGenres from "../components/HeroGenres";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-carousel">
        <HeroCarousel />
      </div>
      <div className="hero-genres">
        <HeroGenres />
      </div>
    </section>
  );
};
export default Hero;
