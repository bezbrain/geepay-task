import React from "react";
import styles from "./orders.module.css";
import OrderCard from "./orderCard/orderCard";

const Orders = () => {
  return (
    <div className={styles.orders__con}>
      <header>
        <p>Orders</p>
        <p>See All</p>
      </header>

      <table className={styles.order__table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <OrderCard />
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
