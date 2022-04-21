import { nanoid } from "nanoid";
import styles from "./style.module.css";
function Province(props) {
  const { provincesData } = props;
  let no = 1;
  return (
    <div className={styles.container}>
      <section className={styles.province}>
        <h2 className={styles.province__title}>Provinsi</h2>
        <h3 className={styles.province__subtitle}>
          Data Covid Berdasarkan Provinsi
        </h3>
        <div className={styles.province__container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {provincesData.map(function (province) {
                let id = nanoid();
                return (
                  <tr key={id}>
                    <td>{no++}</td>
                    <td>{province.kota}</td>
                    <td>{province.kasus}</td>
                    <td>{province.sembuh}</td>
                    <td>{province.meninggal}</td>
                    <td>{province.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Province;
