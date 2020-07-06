import React from "react";
import styles from "./SideNav.module.css";
import { Icon } from "./Icon";

export function Two({ todo, invoice, folder }) {
  return (
    <>
      <div className={styles.dash}>
        <Icon image={todo} />
        <h2>To-Do</h2>
      </div>
      <div className={styles.activ}>
        <Icon image={invoice} />
        <h2>Invoices</h2>
      </div>
      <div className={styles.time}>
        <Icon image={folder} />
        <h2>Projects</h2>
      </div>
      <hr />
    </>
  );
}
