import React from "react";
import { orderIcon } from "../../../../assets/icons/orderIcon";
import styles from "./orderCard.module.css";

const OrderCard = ({ orderImg, name, date, amount, status, statusCol }) => {
  return (
    <tr>
      <td className={styles.order__personal}>
        <img src={orderImg} alt={name} />
        <span>{name}</span>
      </td>
      <td>{date}</td>
      <td>{amount}</td>
      <td className={statusCol}>{status}</td>
      <td className={styles.order__invoice}>
        <img src={orderIcon} alt="view" />
        <span>View</span>
      </td>
    </tr>
  );
};

export default OrderCard;
