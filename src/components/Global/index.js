import styles from "./style.module.css";
import Card from "../Cards";
import data from "../../utils/constants/indonesia.js";
import { nanoid } from "nanoid";
function Global() {
  const globals = data.indonesia;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.globals}>
          <h2 className={styles.globals__title}>Indonesia</h2>
          <h3 className={styles.globals__subtitle}>
            Data Covid Berdasarkan Global
          </h3>
          <div className={styles.global__container}>
            {globals.map(function (global) {
              let id = nanoid();
              return <Card global={global} key={id} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Global;
