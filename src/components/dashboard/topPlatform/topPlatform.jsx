import React from "react";
import styles from "./top.module.css";
import PlatformCard from "./platformCard/platformCard";
import { topPlatformData } from "../../../utils/data";

const TopPlatform = ({ isDark }) => {
  const platformColor = (color) => {
    if (color === "purple") {
      return styles.platform__book;
    } else if (color === "offBlue") {
      return styles.platform__artisan;
    } else if (color === "yellow") {
      return styles.platform__toy;
    } else {
      return styles.platform__xtstore;
    }
  };

  return (
    <div
      className={`${isDark ? styles.platform__dark : styles.platform__light} ${
        styles.top__platform
      }`}
    >
      <header>
        <p className={`${isDark ? styles.dark__color : styles.light__color}`}>
          Top Platform
        </p>
        <p>See All</p>
      </header>

      <div>
        {topPlatformData.map((each) => {
          const { id, color } = each;
          return (
            <PlatformCard
              key={id}
              {...each}
              color={platformColor(color)}
              isDark={isDark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopPlatform;
