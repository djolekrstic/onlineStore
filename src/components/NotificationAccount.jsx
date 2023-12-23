import { nanoid } from "nanoid";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const NotificationAccount = ({ data, icon, state, setState }) => {
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
        {data.name}
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
        className="settings-dropdown"
        ref={linksContainer}
        style={{
          height: `${data.items.length * 50}px`,
          opacity: `${state ? "1" : "0"}`,
          display: `${state ? "block" : "none"}`,
        }}
      >
        {data.items.map((item, index) => {
          return (
            <div key={nanoid()}>
              <NavLink to={data.routes[index]} onClick={() => setState(false)}>
                <p>{item}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NotificationAccount;
