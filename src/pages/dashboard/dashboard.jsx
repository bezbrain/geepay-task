import React from "react";
import SalesTrend from "../../components/dashboard/salesTrends/salesTrends";
import styles from "./dashboard.module.css";
import SummaryChart from "../../components/dashboard/otherCharts/summary/summaryChart";

const Dashboard = () => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.upper___section}>
        <SalesTrend />
        <SummaryChart />
      </section>
    </main>
  );
};

export default Dashboard;
