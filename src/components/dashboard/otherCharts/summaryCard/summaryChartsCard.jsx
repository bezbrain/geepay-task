import React from "react";
import styles from "./card.module.css";
import { totalOrder, trendingUp } from "../../../../assets/icons/graphIcons";
import { totalOrderImg } from "../../../../assets/images/graphImages";

const SummaryChartsCard = () => {
  return (
    <div className={styles.single__chart__card}>
      <header>
        <div className={styles.order__con}>
          <img src={totalOrder} alt="" />
        </div>
        <img src={totalOrderImg} alt="" />
      </header>

      <p>Total Order</p>
      <h3>350</h3>

      <footer className={styles.chart__footer}>
        <div>
          <img src={trendingUp} alt="" />
          <span>23.5%</span>
        </div>
        <p>vs. previous month</p>
      </footer>
    </div>
  );
};

export default SummaryChartsCard;
