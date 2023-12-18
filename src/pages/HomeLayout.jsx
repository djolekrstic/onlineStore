import { Outlet, useNavigation } from "react-router-dom";
import { Notification, Navigation, Footer } from "../layout";
import { Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Notification />
      <Navigation />
      {isPageLoading ? (
        <Loading />
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
