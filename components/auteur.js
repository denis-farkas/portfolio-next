import Link from "next/link";
import styles from "../styles/auteur.module.css";
import Image from "next/future/image";

const Auteur = () => {
  return (
    <div className={styles.auteur_container}>
      <div className={styles.profil_left}>
        <Image
          className={styles.imagen}
          src="/img/imgAvatar.jpg"
          width={138}
          height={133}
          alt="denis"
        />
      </div>
      <div className={styles.auteur_present}>
        <h2 className={styles.auteur_title}>Mon profil</h2>
        <p className={styles.auteur_text}>
          Mon expérience de consultant anthropologue en Amérique Latine, pendant
          20 ans, me confére une approche particuliére de l&apos;activité de
          développeur web, essentiellement basée sur l&apos;écoute et le
          partage. Compétences essentielles lorsque l&apos;on cherche à
          retranscrire l&apos;identité et les besoins d&apos;une entreprise.
        </p>
      </div>
      <div className={styles.profil_right}>
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
};

export default Auteur;
