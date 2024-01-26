import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/head/header";
import SideBar from "../sideBar/side-bar/sideBar";
import styles from "./shared.module.css";

const SharedLayout = ({ isDark, setIsDark }) => {
  return (
    <section>
      <Header isDark={isDark} />
      <div className={styles.main__page}>
        <SideBar isDark={isDark} setIsDark={setIsDark} />
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
