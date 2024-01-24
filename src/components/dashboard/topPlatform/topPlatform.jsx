import React from "react";
import styles from "./top.module.css";
import PlatformCard from "./platformCard/platformCard";

const TopPlatform = () => {
  return (
    <div className={styles.top__platform}>
      <header>
        <p>Top Platform</p>
        <p>See All</p>
      </header>

      <div>
        <PlatformCard />
      </div>
    </div>
  );
};

export default TopPlatform;
