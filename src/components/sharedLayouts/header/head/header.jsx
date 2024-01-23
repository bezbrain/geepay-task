import React from "react";
import { logo } from "../../../../assets/icons/sideBarIcons";
import styles from "./header.module.css";
import SearchInput from "../searchInput/searchInput";
import Calendar from "../calender/calendar";
import { solarBell } from "../../../../assets/icons/headersIcons";
import Profile from "../profile/profile";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left__hand__side}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>Dashboard</h1>
      </div>

      <div className={styles.right__hand__side}>
        <SearchInput />
        <Calendar />
        <img src={solarBell} alt="Bell" />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
