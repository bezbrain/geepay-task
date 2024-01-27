import React from "react";
import styles from "./sales.module.css";
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
