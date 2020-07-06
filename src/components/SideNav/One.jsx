import React from "react";
import styles from "./SideNav.module.css";

import { Icon } from "./Icon";

export function One({ speed, graph, timer }) {
  return (
    <div className={styles.nav}>
      <div className={styles.dash}>
        <Icon image={speed} />
        <h2>Dashboard</h2>
      </div>
      <div className={styles.activ}>
        <Icon image={graph} />
        <h2>Activity</h2>
      </div>
      <div className={styles.time}>
        <Icon image={timer} />
        <h2>TimeSheet</h2>
      </div>
    </div>
  );
}
