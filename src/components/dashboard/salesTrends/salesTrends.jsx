import React, { useEffect, useRef } from "react";
import { createGraph } from "../../../utils/graphs/salesTrend";
import styles from "./sales.module.css";
// import Chart from "chart.js/dist";

const SalesTrend = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    createGraph(graphRef);
  }, []);

  return (
    <div className={styles.sales__trends}>
      <p>Sales Trend</p>
      <div>
        <canvas id="acquisitions"></canvas>
      </div>
    </div>
  );
};

export default SalesTrend;
