import styles from "./style.module.css";
import Menu from "../Menu/index";
function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footer__title}>Covid ID</h2>
          <p className="styles.footer__author">Developed by danang</p>
        </div>
        <Menu />
      </footer>
    </div>
  );
}

export default Footer;
