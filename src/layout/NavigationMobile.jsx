import { MdMenu, MdClear } from "react-icons/md";
import { BsHeart, BsBag } from "react-icons/bs";
import { account, currency, language } from "../data";
import { nanoid } from "nanoid";
import { changeCurrency, changeLanguage } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavSearch } from "../components";

const NavigationMobile = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const productsLikedNum = useSelector(
    (state) => state.likedState.numItemsInLiked
  );
  const productsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <>
      <div className="nav-mobile-menu">
        <label>
          <input
            type="checkbox"
            checked={open}
            onChange={() => setOpen(!open)}
          />
          <span style={{ cursor: "pointer" }}>
            {open ? <MdClear /> : <MdMenu />}
          </span>
        </label>
      </div>
      <div className={`nav-sidebar ${open && "nav-sidebar-open"}`}>
        <div className="nav-sidebar-dropdowns">
          <div>
            <h5>{account.name}</h5>
            <ul>
              {account.items.map((item, index) => {
                return (
                  <li key={nanoid()}>
                    <NavLink
                      to={account.routes[index]}
                      onClick={() => setOpen(false)}
                    >
                      <p>{item}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h5>{currency.name}</h5>
            <ul>
              {currency.items.map((item) => {
                return (
                  <li
                    key={nanoid()}
                    onClick={() => {
                      dispatch(changeCurrency(item));
                      setOpen(false);
                    }}
                  >
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h5>{language.name}</h5>
            <ul>
              {language.items.map((item, index) => {
                return (
                  <li
                    key={nanoid()}
                    onClick={() => {
                      dispatch(changeLanguage(language.language[index]));
                      setOpen(false);
                    }}
                  >
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="nav-sidebar-navSearch">
          <h5>Search</h5>
          <NavSearch setOpen={setOpen} />
        </div>
        <div className="nav-sidebar-wishlistAndCart">
          <h5>Wishlist and Cart</h5>
          <div className="nav-icons-mobile">
            <div className="nav-icon">
              <NavLink
                to="liked"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
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
              <NavLink
                to="cart"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
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
        </div>
      </div>
    </>
  );
};
export default NavigationMobile;
