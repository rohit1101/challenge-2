import React from "react";
import styles from "./SideNav.module.css";
import { Icon } from "./Icon";

export function Two({ todo, invoice, folder }) {
  return (
    <>
      <div className={styles.dash}>
        <Icon image={todo} />
        <h2>Dashboard</h2>
      </div>
      <div className={styles.activ}>
        <Icon image={invoice} />
        <h2>Activity</h2>
      </div>
      <div className={styles.time}>
        <Icon image={folder} />
        <h2>TimeSheet</h2>
      </div>
    </>
  );
}
