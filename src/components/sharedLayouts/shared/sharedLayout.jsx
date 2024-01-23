import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/head/header";
import SideBar from "../sideBar/side-bar/sideBar";

const SharedLayout = () => {
  return (
    <section>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
