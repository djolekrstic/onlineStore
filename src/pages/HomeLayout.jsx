import { Outlet, useNavigation } from "react-router-dom";
import { Notification, Navigation } from "../layout";
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
    </>
  );
};
export default HomeLayout;
