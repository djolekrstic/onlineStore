import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../features/user/userSlice";
import { nanoid } from "nanoid";

const NotificationCurrency = ({ data, icon, state, setState }) => {
  const dispatch = useDispatch();
  const activeCurrency = useSelector((state) => state.userState.currency);

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
        {data.items.map((item) => {
          return (
            <div key={nanoid()} onClick={() => dispatch(changeCurrency(item))}>
              <a href="">
                <p>{item}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NotificationCurrency;
