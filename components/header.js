import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barre}`}>
        <Link href={"/"}>
          <a>
            <Image src="/img/logo.png" width={302} height={40} alt="logo" />
          </a>
        </Link>
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
              Contactez-moi
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
