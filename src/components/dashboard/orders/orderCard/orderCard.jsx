import React from "react";
import { orderIcon } from "../../../../assets/icons/orderIcon";

const OrderCard = ({ orderImg, name, date, amount, status, statusCol }) => {
  return (
    <tr>
      <td>
        <img src={orderImg} alt={name} />
        <span>{name}</span>
      </td>
      <td>{date}</td>
      <td>{amount}</td>
      <td className={statusCol}>{status}</td>
      <td>
        <img src={orderIcon} alt="view" />
        <span>View</span>
      </td>
    </tr>
  );
};

export default OrderCard;
