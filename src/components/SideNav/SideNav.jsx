import React from "react";
import styles from "./SideNav.module.css";
import logo from "../../assets/logo.png";

export function SideNav() {
  return (
    <div className={styles.main}>
      <img src={logo} alt="ss" />
    </div>
  );
}
