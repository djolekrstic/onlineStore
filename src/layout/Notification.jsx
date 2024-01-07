import React, { useState } from "react";
import { account, currency, language } from "../data";
import { BsChevronDown, BsMoon, BsSun } from "react-icons/bs";
import {
  NotificationAccount,
  NotificationCurrency,
  NotificationLanguage,
} from "../components";
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
          <div className="notification-right-dropdowns">
            {/* Account */}
            <NotificationAccount
              data={account}
              icon={<BsChevronDown />}
              state={accountState}
              setState={setAccountState}
            />
            {/* Currency */}
            <NotificationCurrency
              data={currency}
              icon={<BsChevronDown />}
              state={currencyState}
              setState={setCurrencyState}
            />
            {/* Language */}
            <NotificationLanguage
              data={language}
              icon={<BsChevronDown />}
              state={languageState}
              setState={setLanguageState}
            />
          </div>
          <div className="notification-theme">
            <label>
              <input
                type="checkbox"
                onChange={handleTheme}
                style={{ display: "none" }}
              />
              {theme == "light" ? (
                <BsMoon className="themeIcon" />
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
export default React.memo(Notification);
