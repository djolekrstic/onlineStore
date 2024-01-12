import { NavLink } from "react-router-dom";
import { NavSearch } from "../components";
import { NavigationMobile } from "./";
import { BsHeart, BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const productsLikedNum = useSelector(
    (state) => state.likedState.numItemsInLiked
  );
  const productsInCart = useSelector((state) => state.cartState.numItemsInCart);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div>
          <NavLink to="/" className="logo">
            online<span>Games</span>
          </NavLink>
        </div>
        <div className="nav-search">
          <NavSearch />
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <NavLink to="liked" className="nav-link">
              {productsLikedNum > 0 ? (
                <div className="nav-icon-indicator">
                  <p>{productsLikedNum}</p>
                </div>
              ) : (
                ""
              )}
              <BsHeart />
            </NavLink>
          </div>
          <div className="nav-icon">
            <NavLink to="cart" className="nav-link">
              {productsInCart > 0 ? (
                <div className="nav-icon-indicator">
                  <p>{productsInCart}</p>
                </div>
              ) : (
                ""
              )}
              <BsBag />
            </NavLink>
          </div>
        </div>
        <NavigationMobile open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};
export default React.memo(Navigation);
