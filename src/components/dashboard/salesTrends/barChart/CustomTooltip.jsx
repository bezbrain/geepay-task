import React from "react";
import styles from "./barChart.module.css";

const CustomTooltip = ({ active, payload, isDark }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className={`${
          isDark ? styles.customTooltip__dark : styles.customTooltip__light
        } ${styles.customTooltip}`}
      >
        <p>{`$${data.count}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
