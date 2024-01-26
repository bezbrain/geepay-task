import React from "react";
import { logo } from "../../../../assets/icons/sideBarIcons";
import styles from "./header.module.css";
import SearchInput from "../searchInput/searchInput";
import Calendar from "../calender/calendar";
import { solarBell } from "../../../../assets/icons/headersIcons";
import Profile from "../profile/profile";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = ({ isDark }) => {
  return (
    <div
      className={`${isDark ? styles.dark__mode : styles.light__mode} ${
        styles.header
      }`}
    >
      <div className={styles.left__hand__side}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2
          className={`${
            isDark ? styles.dashboard__dark : styles.dashboard__light
          }`}
        >
          Dashboard
        </h2>
      </div>

      <div className={styles.right__hand__side}>
        <SearchInput isDark={isDark} />
        <Calendar isDark={isDark} />
        <div className={styles.bell}>
          {/* <img src={solarBell} alt="Bell" /> */}
          <IoNotificationsOutline
            className={`${
              isDark ? styles.calendar__dark : styles.calendar__light
            } ${styles.bell__icon}`}
          />
        </div>
        <Profile isDark={isDark} />
      </div>
    </div>
  );
};

export default Header;
