import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/projet.module.css";
import { useRouter } from "next/router";

function Projet_back({ projet }) {
  const router = useRouter();
  const { name, content, image_1, integration } = projet;
  if (!integration) {
    return (
      <article>
        <div className={styles.card}>
          <div className={styles.media}>
            <div className={styles.layer}>
              <p className={styles.layer_text}>{content}</p>
              <div className={styles.badge} tabIndex="2">
                +
              </div>
            </div>
            <Image
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
}

export default Projet_back;
