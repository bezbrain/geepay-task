import React from "react";
import { solarCalendar } from "../../../../assets/icons/headersIcons";
import styles from "./calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <img src={solarCalendar} alt="Calendar" />
      <p>November 15, 2023</p>
    </div>
  );
};

export default Calendar;
