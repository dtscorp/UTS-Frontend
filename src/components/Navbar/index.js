import { useState } from "react";
import Menu from "../Menu/index";
import styles from "./style.module.css";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  function handleMenu() {
    setIsShow(!isShow);
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div>
            <h1 className={styles.navbar__brand}>Covid ID</h1>
          </div>
          <div className={styles.navbar__toggle} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Menu isShow={isShow} />
      </nav>
    </div>
  );
}

export default Navbar;
