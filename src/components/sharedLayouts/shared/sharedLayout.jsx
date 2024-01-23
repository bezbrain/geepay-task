import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/head/header";
import SideBar from "../sideBar/side-bar/sideBar";
import styles from "./shared.module.css";

const SharedLayout = () => {
  return (
    <section>
      <Header />
      <div className={styles.main__page}>
        <SideBar />
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
