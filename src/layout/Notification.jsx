import { useState } from "react";
import { account, currency, language } from "../data";
import { BsChevronDown, BsMoonStars, BsSun } from "react-icons/bs";
import NotificationSettings from "../components/NotificationSettings";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Notification = () => {
  const [accountState, setAccountState] = useState(false);
  const [currencyState, setCurrencyState] = useState(false);
  const [languageState, setLanguageState] = useState(false);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const theme = useSelector((state) => state.userState.theme);

  return (
    <section className="notification">
      <div className="notification-center">
        <div className="notification-left">
          <p>Welcome to the onlineGames!</p>
        </div>
        <div className="notification-right">
          {/* Account */}
          <NotificationSettings
            data={account}
            icon={<BsChevronDown />}
            state={accountState}
            setState={setAccountState}
          />
          {/* Currency */}
          <NotificationSettings
            data={currency}
            icon={<BsChevronDown />}
            state={currencyState}
            setState={setCurrencyState}
          />
          {/* Language */}
          <NotificationSettings
            data={language}
            icon={<BsChevronDown />}
            state={languageState}
            setState={setLanguageState}
          />
          <div>
            <label>
              <input
                type="checkbox"
                onChange={handleTheme}
                style={{ display: "none" }}
              />
              {theme == "light" ? (
                <BsMoonStars className="themeIcon" />
              ) : (
                <BsSun className="themeIcon" />
              )}
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notification;
