import React from "react";
import styles from "./SideNav.module.css";
import logo from "../../assets/logo.png";
import speedometer from "../../assets/speedometer.png";
import graph from "../../assets/graph.png";
import timerWhite from "../../assets/timer_white.png";

import { One } from "./One";

export function SideNav() {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="ss" className={styles.first} />
      <One speed={speedometer} graph={graph} timer={timerWhite} />
      <hr />
    </div>
  );
}
