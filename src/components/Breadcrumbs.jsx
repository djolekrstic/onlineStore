import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ name, productsGenre }) => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/">Home</NavLink>
      <p>&gt;</p>
      <NavLink to={`/products?genre=${productsGenre}`}>{productsGenre}</NavLink>
      {name && (
        <>
          <p>&gt;</p>
          <NavLink>{name}</NavLink>
        </>
      )}
    </div>
  );
};
export default Breadcrumbs;
