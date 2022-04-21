import styles from "./style.module.css";

function Card(props) {
  const { global } = props;
  function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }
  return (
    <div className={`${styles.container} ${styles.card}`}>
      <h3 className={styles.card__title}>{global.status}</h3>
      <h2 className={styles.card__data}>{numberWithCommas(global.total)}</h2>
    </div>
  );
}

export default Card;
