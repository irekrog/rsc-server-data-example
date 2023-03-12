import { ServerData } from "rsc-server-data";
import { Client } from "@/app/client";
import styles from "./page.module.css";

const RSC = () => {
  return (
    <Client>
      <ServerData className={styles.container} />
    </Client>
  );
};

export default RSC;
