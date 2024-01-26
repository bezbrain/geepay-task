import React from "react";
import styles from "./card.module.css";

const SummaryChartsCard = ({
  icon,
  image,
  name,
  value,
  footerImg,
  trend,
  isDark,
}) => {
  return (
    <div
      className={`${isDark ? styles.card__dark : styles.card__light} ${
        styles.single__chart__card
      }`}
    >
      <header>
        <div className={styles.order__con}>
          <img src={icon} alt={name} />
        </div>
        <img src={image} alt={name} />
      </header>

      <p>{name}</p>
      <h3 className={`${isDark ? styles.value__dark : styles.value__light}`}>
        {value}
      </h3>

      <footer className={styles.chart__footer}>
        <div className={trend}>
          <img src={footerImg} alt={name} />
          <span>23.5%</span>
        </div>
        <p className={`${isDark ? styles.value__dark : styles.value__light}`}>
          vs. previous month
        </p>
      </footer>
    </div>
  );
};

export default SummaryChartsCard;
