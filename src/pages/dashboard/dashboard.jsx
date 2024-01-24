import React from "react";
import SalesTrend from "../../components/dashboard/salesTrends/salesTrends";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <main className={styles.dashboard}>
      <SalesTrend />
    </main>
  );
};

export default Dashboard;
