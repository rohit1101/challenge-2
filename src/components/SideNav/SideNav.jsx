import React from "react";
import styles from "./SideNav.module.css";
import logo from "../../assets/logo.png";
import speedometer from "../../assets/speedometer.png";
import graph from "../../assets/graph.png";
import timerWhite from "../../assets/timer_white.png";
import todo from "../../assets/icons8-today-96.png";
import invoice from "../../assets/bill.png";
import folder from "../../assets/folder.png";
import { One } from "./One";
import { Two } from "./Two";

export function SideNav() {
  return (
    <div className={styles.nav}>
      <One speed={speedometer} graph={graph} timer={timerWhite} logo={logo} />
      <Two todo={todo} invoice={invoice} timer={timerWhite} folder={folder} />
    </div>
  );
}
