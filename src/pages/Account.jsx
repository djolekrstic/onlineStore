import { Link } from "react-router-dom";
import { Heading } from "../components";

const Account = () => {
  return (
    <section className="margin-top empty-pages">
      <Heading content="Log in to gain access to your account details." />
      <Link to="/login">Log in</Link>
    </section>
  );
};
export default Account;
