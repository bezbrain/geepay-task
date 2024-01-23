import React from "react";
import { profileDetails } from "../../../../assets/images/headerImages";
import { FaAngleDown } from "react-icons/fa6";

const Profile = () => {
  return (
    <div>
      <img src={profileDetails} alt="Profile" />
      <h3>Justin Bergson</h3>
      <p>Justin@gmail.com</p>
      <FaAngleDown />
    </div>
  );
};

export default Profile;
