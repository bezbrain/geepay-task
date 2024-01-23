import React from "react";
import { profileDetails } from "../../../../assets/images/headerImages";
import styles from "./profile.module.css";
import { FaAngleDown } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className={styles.profile__details}>
      <img src={profileDetails} alt="Profile" />
      <div>
        <h3>Justin Bergson</h3>
        <p>Justin@gmail.com</p>
      </div>
      <FaAngleDown />
    </div>
  );
};

export default Profile;
