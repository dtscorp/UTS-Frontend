import styles from "./style.module.css";

function Menu(props) {
  const { isShow } = props;
  return (
    <div className={!isShow ? styles.hide : "false"}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>Global</li>
        <li className={styles.navbar__item}>Indonesia</li>
        <li className={styles.navbar__item}>Provinsi</li>
        <li className={styles.navbar__item}>About</li>
      </ul>
    </div>
  );
}

export default Menu;
