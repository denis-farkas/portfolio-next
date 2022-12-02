import Link from "next/link";
import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Layout
        title={"Accueil"}
        description={"portfolio de denis farkas, version 2022"}
      >
        <div className={`contenedor ${styles.main}`}>
          <div className={styles.content_left}>
            <div className={styles.subtitles}>Atelier</div>
            <div className={styles.title}>Développement web</div>
            <div className={styles.paragraphe}>
              Qu&#39;il s&#39;agisse de l&#39;intégration de maquettes, du
              développement de nouvelles fonctionnalités ou de la création
              intégrale d&#39;un site internet, notre atelier est à votre
              disposition, pour étudier ensemble, les solutions techniques les
              plus adaptées à vos besoins.
            </div>
          </div>
          <div className={styles.content_right}>
            <Image
              className={styles.img}
              src="/img/crop.png"
              width={1004}
              height={500}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.content_footer}>
          <div className={styles.integrate}>
            <div className={styles.media}>
              <div className={styles.layer}>
                <p className={styles.layer_text}>Intégration Frontend</p>
              </div>
              <Image
                className={styles.img}
                src="/img/basket.jpg"
                width={369}
                height={276}
                alt="exemple integration"
              />
            </div>
          </div>
          <div className={styles.php}>
            <div className={styles.media}>
              <div className={styles.layer}>
                <p className={styles.layer_text}>Intégration Frontend</p>
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
            <h4>Informations</h4>
            <ul className={styles.contacts}>
              <li className={styles.adresse}>
                <Image
                  className={styles.img}
                  src="/img/cv.png"
                  width={24}
                  height={24}
                  alt="cv"
                />
                <span>
                  <Link href="/pagepdf">Curriculum</Link>
                </span>
              </li>
              <li className={styles.adresse}>
                <Image
                  className={styles.img}
                  src="/img/email.png"
                  width={24}
                  height={24}
                  alt="email"
                />
              </li>
              <li className={styles.adresse}>
                <Image
                  className={styles.img}
                  src="/img/linkedin.png"
                  width={24}
                  height={24}
                  alt="linkedin"
                />
              </li>
              <li className={styles.adresse}>
                <Image
                  className={styles.img}
                  src="/img/github.png"
                  width={24}
                  height={24}
                  alt="github"
                />
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
