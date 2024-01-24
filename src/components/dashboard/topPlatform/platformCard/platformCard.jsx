import React from "react";
import styles from "./platformCard.module.css";

const PlatformCard = () => {
  return (
    <div className={styles.top__platform__card}>
      <p>Book Bazaar</p>
      <div className={styles.platform__bar}>
        <div></div>
      </div>

      <footer>
        <p>$2,500,000</p>
        <p>+15%</p>
      </footer>
    </div>
  );
};

export default PlatformCard;
