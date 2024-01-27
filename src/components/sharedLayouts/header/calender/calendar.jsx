import React from "react";
import styles from "./calendar.module.css";
import { LuCalendarDays } from "react-icons/lu";

const Calendar = ({ isDark }) => {
  return (
    <div className={styles.calendar}>
      <LuCalendarDays
        className={`${
          isDark ? styles.calendar__dark : styles.calendar__light
        } ${styles.calendar__icon}`}
        title="Nov 15, 2023"
      />
      <p
        className={`${
          isDark ? styles.calendar__dark : styles.calendar__light
        } `}
      >
        Nov<span>ember</span> 15, 2023
      </p>
    </div>
  );
};

export default Calendar;
