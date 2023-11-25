import { NavLink } from "react-router-dom";
import { NavSearch } from "../components";
import { BsShuffle, BsHeart, BsBag } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div>
          <NavLink to="/" className="logo">
            online<span>Games</span>
          </NavLink>
        </div>
        <div>
          <NavSearch />
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <div className="nav-icon-indicator">3</div>
            <NavLink to="compare" className="nav-link">
              <BsShuffle />
            </NavLink>
          </div>
          <div className="nav-icon">
            <div className="nav-icon-indicator">3</div>
            <NavLink to="liked" className="nav-link">
              <BsHeart />
            </NavLink>
          </div>
          <div className="nav-icon">
            <div className="nav-icon-indicator">3</div>
            <NavLink to="cart" className="nav-link">
              <BsBag />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
