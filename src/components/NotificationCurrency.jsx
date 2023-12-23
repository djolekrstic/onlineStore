import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../features/user/userSlice";
import { nanoid } from "nanoid";
import { useRef } from "react";

const NotificationCurrency = ({ data, icon, state, setState }) => {
  const dispatch = useDispatch();
  const activeCurrency = useSelector((state) => state.userState.currency);

  const linksContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const links = linksContainer.current;
    const { left, right, bottom } = links.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setState(false);
    }
  };

  return (
    <div
      className="settings"
      onPointerEnter={() => setState(true)}
      onPointerLeave={handleMouseLeave}
    >
      <button className="settings-btn" onTouchStart={() => setState(!state)}>
        {activeCurrency}
        <span
          style={
            state
              ? {
                  transform: "rotate(-180deg)",
                  transition: "transform 0.3s ease-in",
                }
              : {}
          }
        >
          {icon}
        </span>
      </button>
      <div
        ref={linksContainer}
        className="settings-dropdown"
        style={{
          height: `${data.items.length * 50}px`,
          opacity: `${state ? "1" : "0"}`,
          display: `${state ? "block" : "none"}`,
        }}
      >
        {data.items.map((item) => {
          return (
            <div key={nanoid()} onClick={() => dispatch(changeCurrency(item))}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NotificationCurrency;
