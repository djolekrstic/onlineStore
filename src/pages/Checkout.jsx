import { Link } from "react-router-dom";
import { Heading } from "../components";

const Checkout = () => {
  return (
    <section className="margin-top empty-pages">
      <Heading content="Log in to gain access to checkout." />
      <Link to="/login">Log in</Link>
    </section>
  );
};
export default Checkout;
