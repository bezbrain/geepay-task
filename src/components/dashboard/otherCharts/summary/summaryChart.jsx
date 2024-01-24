import React from "react";
import SummaryChartsCard from "../summaryCard/summaryChartsCard";
import styles from "./summary.module.css";
import { chartData } from "../../../../utils/data";

const SummaryChart = () => {
  return (
    <div className={styles.summary__chart}>
      {chartData.map((each) => {
        const { id } = each;
        return <SummaryChartsCard key={id} />;
      })}
    </div>
  );
};

export default SummaryChart;
