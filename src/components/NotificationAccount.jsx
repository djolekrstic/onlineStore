import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const NotificationAccount = ({ data, icon, state, setState }) => {
  return (
    <div
      className="settings"
      onPointerEnter={() => setState(true)}
      onPointerLeave={() => setState(false)}
    >
      <button
        className="settings-btn"
        onClick={() => setState(!state)}
        onBlur={() => setState(false)}
      >
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
        style={
          state
            ? {
                height: `${data.items.length * 50}px`,
                transition: "height 0.4s ease-in",
                borderBottom: "1px solid var(--color-neutral)",
              }
            : {}
        }
      >
        {data.items.map((item, index) => {
          return (
            <div key={nanoid()}>
              <NavLink to={data.routes[index]}>
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
