import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../features/user/userSlice";
import { nanoid } from "nanoid";

const NotificationLanguage = ({ data, icon, state, setState }) => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector((state) => state.userState.language);
  const activeLanguageIndex = data.language.findIndex(
    (x) => x == activeLanguage
  );

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
        {data.items[activeLanguageIndex]}
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
            <div
              key={nanoid()}
              onClick={() => dispatch(changeLanguage(data.language[index]))}
            >
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
export default NotificationLanguage;
