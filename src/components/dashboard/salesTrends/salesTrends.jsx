import React, { useEffect, useRef } from "react";
import { createGraph } from "../../../utils/graphs/salesTrend";
import styles from "./sales.module.css";
import { FaAngleDown } from "react-icons/fa6";
import BarChartComp from "./barChart/barChart";
import ScrollRight from "../../helpers/scrollRight/scrollRight";

const SalesTrend = ({ isDark }) => {
  return (
    <div
      className={`${
        isDark ? styles.dashboard__dark : styles.dashboard__light
      } ${styles.sales__trends}`}
    >
      <header
        className={`${isDark ? styles.dark__color : styles.light__color}`}
      >
        <p>Sales Trends</p>
        <div>
          <span>Sort by:</span>
          <select>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
          {/* <button>
            Weekly <FaAngleDown className={styles.weekly__icon} />
          </button> */}
        </div>
      </header>

      <div className={styles.bar__chart__con}>
        <BarChartComp isDark={isDark} />
      </div>

      <ScrollRight isDark={isDark} />
    </div>
  );
};

export default SalesTrend;
