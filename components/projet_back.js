import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/projet_bf.module.css";

function Projet_back({ projet }) {
  const { name, content, image_1, integration, url } = projet;
  const condition = integration ? "green" : "blue";

  return (
    <article>
      <div className={`${styles.card} ${condition}`}>
        <div className={styles.media}>
          <div className={styles.layer}>
            <p className={styles.layer_text}>{content}</p>
            <Link href={`/projet/${url}`}>
              <div className={styles.badge} tabIndex="2">
                +
              </div>
            </Link>
          </div>
          <Image
            className={styles.courbure}
            src={`/img/${image_1}`}
            width={302}
            height={203}
            alt={`projet ${name}`}
          />
        </div>
      </div>
    </article>
  );
}

export default Projet_back;
