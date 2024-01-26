import React, { useState } from "react";
import { solarCalendar } from "../../../../assets/icons/headersIcons";
import styles from "./calendar.module.css";
import { LuCalendarDays } from "react-icons/lu";

const Calendar = ({ isDark }) => {
  return (
    <div className={styles.calendar}>
      {/* <img src={solarCalendar} alt="Calendar" title="November 15, 2023" /> */}
      <LuCalendarDays
        className={`${
          isDark ? styles.calendar__dark : styles.calendar__light
        } ${styles.calendar__icon}`}
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
