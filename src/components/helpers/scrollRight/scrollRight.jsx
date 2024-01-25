import React from "react";
import styles from "./scroll.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ScrollRight = () => {
  return (
    <p className={styles.scroll__right}>
      <span>scroll right</span>{" "}
      <MdOutlineKeyboardDoubleArrowRight className={styles.right__arrow} />
    </p>
  );
};

export default ScrollRight;
