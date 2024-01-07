import { Banner, BannerSmall, ProductsSlider } from "../components";

const LandingContent = () => {
  return (
    <section className="margin-top">
      <ProductsSlider name="Featured Products" start={0} end={9} />
      <Banner />
      <ProductsSlider name="New Arrivals" start={10} end={20} />
      <div className="banner-small margin-top">
        <BannerSmall genre="Action" ad="Play Now and Unleash the Action!" />
        <BannerSmall genre="Puzzle" ad="Elevate Your Game with Puzzles!" />
      </div>
      <ProductsSlider name="Recently Added" start={21} end={30} />
    </section>
  );
};
export default LandingContent;
