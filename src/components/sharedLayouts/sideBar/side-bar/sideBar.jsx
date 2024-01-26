import React from "react";
import styles from "./sideBar.module.css";
import { baseIcon, topIcons } from "../../../../utils/data";
import { frame, moon } from "../../../../assets/icons/sideBarIcons";

const SideBar = ({ isDark, setIsDark }) => {
  return (
    <section
      className={`${isDark ? styles.dark__mode : styles.light__mode} ${
        styles.sidebar__section
      }`}
    >
      <div
        className={`${
          isDark ? styles.dark__mode__side__bar : styles.light__mode__side__bar
        } ${styles.side__bar}`}
      >
        <div className={styles.top__icons}>
          {topIcons.map((each) => {
            const { id, icon, name } = each;
            return <img src={icon} alt={name} key={id} />;
          })}

          <div
            className={`${isDark ? styles.dark__mode : styles.light__mode} ${
              styles.light__dark
            }`}
          >
            <img src={frame} alt="frame" onClick={() => setIsDark(true)} />
            <img src={moon} alt="moon" onClick={() => setIsDark(false)} />
          </div>
        </div>

        <div className={styles.base__icons}>
          {baseIcon.map((each) => {
            const { id, icon, name } = each;
            return <img src={icon} alt={name} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
