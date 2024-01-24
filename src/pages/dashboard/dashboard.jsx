import React from "react";
import SalesTrend from "../../components/dashboard/salesTrends/salesTrends";
import styles from "./dashboard.module.css";
import SummaryChart from "../../components/dashboard/otherCharts/summary/summaryChart";
import Orders from "../../components/dashboard/orders/orders";
import TopPlatform from "../../components/dashboard/topPlatform/topPlatform";

const Dashboard = () => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.upper___section}>
        <SalesTrend />
        <SummaryChart />
      </section>

      <section className={styles.lower__section}>
        <Orders />
        <TopPlatform />
      </section>
    </main>
  );
};

export default Dashboard;
