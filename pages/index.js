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
            <div className={styles.title}>Développeur web</div>
          </div>
          <div className={styles.content_right}>
            <Image
              className={styles.img}
              src="/img/crop.png"
              width={1000}
              height={498}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.content_footer}>
          <div className={styles.web}>
            <div className={styles.web_sup}>
              <Image
                className={styles.img}
                src="/img/support.png"
                width={180}
                height={201}
                alt="support"
              />
            </div>
            <div className={styles.web_inf}>
              <p className={styles.web_p}>
                Sites web adaptés sur tout support.
              </p>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.left}>
              <p className={styles.left_p}>
                Systèmes de gestion de données - Php, API rest -
              </p>
            </div>
            <div className={styles.right}>
              <Image
                className={styles.img}
                src="/img/bdd.png"
                width={100}
                height={100}
                alt="bdd"
              />
            </div>
          </div>
          <div className={styles.front}>
            <div className={styles.left}>
              <Image
                className={styles.img}
                src="/img/front.png"
                width={100}
                height={100}
                alt="frontend"
              />
            </div>
            <div className={styles.right}>
              <p className={styles.left_p}>
                Pages dynamiques et interactives (Css, Php, Javascript, React)
              </p>
            </div>
          </div>
          <div className={styles.integration}>
            <div className={styles.left}>
              <p className={styles.left_p}>
                Intégration de maquettes et croquis.(Moqups.com, Figma)
              </p>
            </div>
            <div className={styles.right}>
              <Image
                className={styles.img}
                src="/img/figma.png"
                width={110}
                height={110}
                alt="maquettes"
              />
            </div>
          </div>
          <div className={styles.nocode}>nocode</div>
          <div className={styles.projet}>projet</div>
        </div>
      </Layout>
    </>
  );
}
