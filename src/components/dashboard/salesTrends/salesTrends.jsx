import React, { useEffect, useRef } from "react";
import { createGraph } from "../../../utils/graphs/salesTrend";
import styles from "./sales.module.css";
import { FaAngleDown } from "react-icons/fa6";
import BarChartComp from "./barChart/barChart";

const SalesTrend = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    // createGraph(graphRef);
  }, []);

  return (
    <div className={styles.sales__trends}>
      <header>
        <p>Sales Trends</p>
        <div>
          <span>Short by:</span>
          <button>
            Weekly <FaAngleDown className={styles.weekly__icon} />
          </button>
        </div>
      </header>

      <div>
        <BarChartComp />
      </div>

      {/* <div>
        <canvas id="acquisitions"></canvas>
      </div> */}
    </div>
  );
};

export default SalesTrend;
