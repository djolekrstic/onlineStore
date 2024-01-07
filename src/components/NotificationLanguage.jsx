import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../features/user/userSlice";
import { nanoid } from "nanoid";
import React, { useRef } from "react";

const NotificationLanguage = ({ data, icon, state, setState }) => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector((state) => state.userState.language);
  const activeLanguageIndex = data.language.findIndex(
    (x) => x == activeLanguage
  );

  const linksContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const links = linksContainer.current;
    const { left, right, top, bottom } = links.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (
      clientX < left + 1 ||
      clientX > right - 1 ||
      clientY > bottom - 1 ||
      clientY > top + 1
    ) {
      setState(false);
    }
  };

  return (
    <div
      className="settings"
      onMouseEnter={() => setState(true)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="settings-btn" onTouchStart={() => setState(!state)}>
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
        ref={linksContainer}
        style={{
          height: `${(data.items.length + 1) * 50}px`,
          paddingTop: `${(data.items.length + 1) * 1.8}em`,
          opacity: `${state ? "1" : "0"}`,
          display: `${state ? "block" : "none"}`,
        }}
      >
        {data.items.map((item, index) => {
          return (
            <div
              key={nanoid()}
              onClick={() => dispatch(changeLanguage(data.language[index]))}
              className="settings-dropdown-list"
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default React.memo(NotificationLanguage);
