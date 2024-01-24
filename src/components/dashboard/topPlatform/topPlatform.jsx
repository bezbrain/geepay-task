import React from "react";
import styles from "./top.module.css";
import PlatformCard from "./platformCard/platformCard";
import { topPlatformData } from "../../../utils/data";

const TopPlatform = () => {
  const platformColor = (color) => {
    if (color === "purple") {
      return styles.platform__book;
    } else if (color === "offBlue") {
      return styles.platform__artisan;
    } else {
      return styles.platform__toy;
    }
  };

  return (
    <div className={styles.top__platform}>
      <header>
        <p>Top Platform</p>
        <p>See All</p>
      </header>

      <div>
        {topPlatformData.map((each) => {
          const { id, color } = each;
          return (
            <PlatformCard key={id} {...each} color={platformColor(color)} />
          );
        })}

        <p>XStore</p>
      </div>
    </div>
  );
};

export default TopPlatform;
