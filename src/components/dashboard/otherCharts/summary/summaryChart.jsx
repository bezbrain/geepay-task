import React from "react";
import SummaryChartsCard from "../summaryCard/summaryChartsCard";
import styles from "./summary.module.css";
import { chartData } from "../../../../utils/data";

const SummaryChart = ({ isDark }) => {
  const trends = (trend) => {
    if (trend === "trendUp") {
      return styles.trend__up;
    } else {
      return styles.trend__down;
    }
  };

  return (
    <div className={styles.summary__chart}>
      {chartData.map((each) => {
        const { id, trend } = each;

        return (
          <SummaryChartsCard
            key={id}
            {...each}
            isDark={isDark}
            trend={trends(trend)}
          />
        );
      })}
    </div>
  );
};

export default SummaryChart;
