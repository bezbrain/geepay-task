import React from "react";
import styles from "./barChart.module.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={styles.customTooltip}>
        <p>{`$${data.count}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
