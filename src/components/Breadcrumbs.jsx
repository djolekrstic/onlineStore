import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ name, genres }) => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/">Home</NavLink>
      <p>&gt;</p>
      <NavLink>{genres[0].name}</NavLink>
      <p>&gt;</p>
      <NavLink>{name}</NavLink>
    </div>
  );
};
export default Breadcrumbs;
