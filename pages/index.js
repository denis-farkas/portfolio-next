import Link from "next/link";
import Image from "next/future/image";
import Layout from "../components/layout";
import Projet from "../components/projet";
import styles from "../styles/home.module.css";

export default function Home({ projects }) {
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
        <div className={styles.example}>
          <Image
            className={styles.imagen}
            src="/img/chevron2.png"
            width={269}
            height={80}
            alt="déco"
          />
          <h2 className={styles.title_section}>
            FRONT-END: Création et intégration d&apos;interfaces web
          </h2>
        </div>
        <div className={styles.example}>
          <Image
            className={styles.imagen}
            src="/img/chevron2.png"
            width={269}
            height={80}
            alt="déco"
          />
          <h2 className={styles.title_section}>
            BACK-END: Gestion des usagers et des données
          </h2>
        </div>
        <div className={styles.container_example}>
          {projects.map((projet) => (
            <Projet key={projet.id} projet={projet.attributes} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://127.0.0.1:1337/api/projects/");
  const { data: projects } = await response.json();

  return {
    props: {
      projects,
    },
  };
}
