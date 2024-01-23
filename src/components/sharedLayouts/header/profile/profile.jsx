import React from "react";
import { profileDetails } from "../../../../assets/images/headerImages";
import styles from "./profile.module.css";
import { FaAngleDown } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className={styles.profile__details}>
      <img src={profileDetails} alt="Profile" />
      <div className={styles.profile__name}>
        <h4>Justin Bergson</h4>
        <p>Justin@gmail.com</p>
      </div>
      <FaAngleDown />
    </div>
  );
};

export default Profile;
