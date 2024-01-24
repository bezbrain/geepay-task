import React from "react";
import styles from "./sideBar.module.css";
import { baseIcon, topIcons } from "../../../../utils/data";
import { frame, moon } from "../../../../assets/icons/sideBarIcons";

const SideBar = () => {
  return (
    <section className={styles.sidebar__section}>
      <div className={styles.side__bar}>
        <div className={styles.top__icons}>
          {topIcons.map((each) => {
            const { id, icon, name } = each;
            return <img src={icon} alt={name} key={id} />;
          })}

          <div className={styles.light__dark}>
            <img src={frame} alt="frame" />
            <img src={moon} alt="moon" />
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
