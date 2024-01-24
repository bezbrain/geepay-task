import React from "react";
import styles from "./orders.module.css";
import OrderCard from "./orderCard/orderCard";
import { orderData } from "../../../utils/data";

const Orders = () => {
  const statusColor = (status) => {
    if (status === "Paid") {
      return styles.status__paid;
    } else {
      return styles.status__refund;
    }
  };

  return (
    <div className={styles.orders__con}>
      <header>
        <p>Last Orders</p>
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
          {orderData.map((each) => {
            const { id, status } = each;
            return (
              <OrderCard key={id} {...each} statusCol={statusColor(status)} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
