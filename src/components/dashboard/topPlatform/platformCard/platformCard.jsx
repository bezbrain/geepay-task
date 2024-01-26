import React from "react";
import styles from "./platformCard.module.css";

const PlatformCard = ({ color, name, amount, rate, isDark }) => {
  return (
    <div
      className={`${isDark ? styles.dark__color : styles.light__color} ${
        styles.top__platform__card
      }`}
    >
      <p>{name}</p>
      <div className={color}>
        <div></div>
      </div>

      <footer>
        <p>{amount}</p>
        <p>{rate}</p>
      </footer>
    </div>
  );
};

export default PlatformCard;
