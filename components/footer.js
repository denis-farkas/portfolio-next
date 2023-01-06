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
          <Link href="/#projets">
            <a>Projets</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname === "/contact" ? styles.active : ""}>
              Contacts
            </a>
          </Link>
        </nav>
        <p>​© Tous droits réservés {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
