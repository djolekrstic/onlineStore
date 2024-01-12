import { Outlet, useNavigation } from "react-router-dom";
import { Notification, Navigation, Footer } from "../layout";
import { Loading } from "../components";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  let [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition((scrollPosition = position));
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed-nav"
        style={
          scrollPosition > 0
            ? { display: "block", animationName: "navbarScroll" }
            : {}
        }
      >
        <Notification />
        <Navigation />
      </div>
      <Notification />
      <Navigation />
      {isPageLoading ? (
        <section className="loader-section">
          <Loading />
        </section>
      ) : (
        <section className="align-element">
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};
export default HomeLayout;
