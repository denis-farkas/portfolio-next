import Link from "next/link";
import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";
import BackList from "../components/list-back";

export default function Repository() {
  return (
    <div className={styles.content_footer}>
      <div className={styles.integrate}>
        <div className={styles.media}>
          <div className={styles.badge} tabindex="2">
            Découvrir
          </div>
          <div className={styles.layer}>
            <p className={styles.layer_text}>
              Création et Intégration de maquettes Figma. HTML 5, SCSS,
              Bootstrap 5, Javascript Vanilla, React sont nos technologies
              Frontend.
            </p>
          </div>
          <Image
            className={styles.img}
            src="/img/basket.jpg"
            width={334}
            height={241}
            alt="exemple integration"
          />
        </div>
      </div>
      <div className={styles.php}>
        <div className={styles.media}>
          <div className={styles.badge} tabindex="2">
            Découvrir
          </div>
          <div className={styles.layer}>
            <p className={styles.layer_text}>
              Php, Codeigniter, Symfony, MySql ou environnement NodeJs MERN.
              <br />
              Des systèmes de gestion de données relationnels, ou non
              relationnels, robustes et sécurisés.
            </p>
          </div>
          <Image
            className={styles.img}
            src="/img/panama.jpg"
            width={369}
            height={276}
            alt="exemple php"
          />
        </div>
      </div>
      <div className={styles.react}>
        <h4 className={styles.react_title}>Informations</h4>
        <ul className={styles.contacts}>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/cv.png"
              width={24}
              height={24}
              alt="cv"
            />
            <Link href="/cv">
              <a>Curriculum</a>
            </Link>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/email.png"
              width={24}
              height={24}
              alt="email"
            />
            <span className={styles.email}>dfarkas960@gmail.com</span>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/linkedin.png"
              width={24}
              height={24}
              alt="linkedin"
            />
            <span className={styles.email}>
              <Link href="https://www.linkedin.com/in/denis-farkas/">
                <a target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </Link>
            </span>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/github.png"
              width={24}
              height={24}
              alt="github"
            />
            <span className={styles.email}>
              <Link href="https://github.com/denis-farkas/">
                <a target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
