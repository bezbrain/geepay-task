import React from "react";
import styles from "./scroll.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ScrollRight = ({ isDark }) => {
  return (
    <p
      className={`${isDark ? styles.scroll__dark : styles.scroll__light} ${
        styles.scroll__right
      }`}
    >
      <span>scroll right</span>{" "}
      <MdOutlineKeyboardDoubleArrowRight className={styles.right__arrow} />
    </p>
  );
};

export default ScrollRight;
