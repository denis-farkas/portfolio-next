import Link from "next/link";
import styles from "../styles/presentation.module.css";

const Presentation = ({ current }) => {
  const { name, created, frontend, backend, content, integration, url_live } =
    current;
  return (
    <div className={styles.presentation}>
      <p className={styles.descriptive}>
        <span className={styles.title}>Sujet: </span>
        {content}
      </p>
      <p className={styles.descriptive}>
        <span className={styles.title}>Frontend: </span>
        {frontend}
      </p>
      <p className={styles.descriptive}>
        <span className={styles.title}>Backend: </span>
        {backend}
      </p>
      <p className={styles.descriptive}>
        <span className={styles.title}>Créé le:</span> {created}
      </p>
      <a
        className={styles.center}
        href={current.url_live}
        target="_blank"
        rel="noreferrer"
      >
        <button className={styles.add}>Version Live</button>
      </a>
    </div>
  );
};

export default Presentation;
