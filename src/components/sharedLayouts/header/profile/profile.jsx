import React from "react";
import { profileDetails } from "../../../../assets/images/headerImages";
import styles from "./profile.module.css";
import { FaAngleDown } from "react-icons/fa6";

const Profile = ({ isDark }) => {
  return (
    <div className={styles.profile__details}>
      <img src={profileDetails} alt="Profile" />
      <div className={styles.profile__name}>
        <h4 className={`${isDark ? styles.dark__name : styles.light__name}`}>
          Justin Bergson
        </h4>
        <p className={`${isDark ? styles.dark__name : styles.light__name}`}>
          Justin@gmail.com
        </p>
      </div>

      <FaAngleDown
        className={`${
          isDark ? styles.calendar__dark : styles.calendar__light
        } ${styles.profile__icon}`}
      />
    </div>
  );
};

export default Profile;
