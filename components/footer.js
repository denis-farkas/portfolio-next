import Link from "next/link";
import styles from "../styles/footer.module.css";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>
              Accueil
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname === "/about" ? styles.active : ""}>
              A propos
            </a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname === "/gallery" ? styles.active : ""}>
              Projets
            </a>
          </Link>
        </nav>
        <p>​© Tous droits réservés {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
