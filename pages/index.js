import Link from "next/link";
import { PrismaClient } from "@prisma/client";

import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";
import Projet_back from "../components/projet_back";
import Infos from "../components/infos";
import Auteur from "../components/auteur";

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();
  return {
    props: {
      projects,
    },
  };
};

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
        <Auteur />
        <div className={styles.zone}>
          <Infos />
          <div className={styles.container_example}>
            {projects.map((projet) => (
              <Projet_back key={projet.id} projet={projet} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
