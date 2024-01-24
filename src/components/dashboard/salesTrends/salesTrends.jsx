import React, { useEffect, useRef } from "react";
import { createGraph } from "../../../utils/graphs/salesTrend";
import styles from "./sales.module.css";
import { FaAngleDown } from "react-icons/fa6";
// import Chart from "chart.js/dist";

const SalesTrend = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    createGraph(graphRef);
  }, []);

  return (
    <div className={styles.sales__trends}>
      <header>
        <p>Sales Trend</p>
        <div>
          <span>Short by:</span>
          <button>
            Weekly <FaAngleDown />
          </button>
        </div>
      </header>
      <div>
        <canvas id="acquisitions"></canvas>
      </div>
    </div>
  );
};

export default SalesTrend;
