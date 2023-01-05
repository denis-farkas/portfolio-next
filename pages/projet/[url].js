import { PrismaClient } from "@prisma/client";
import Layout from "../../components/layout";
import Gallery from "../../components/gallery";
import Presentation from "../../components/presentation";
import styles from "../../styles/projet.module.css";
import Image from "next/future/image";
export default function Projet({ site }) {
  const current = site[0];
  return (
    <>
      <Layout
        title={"Accueil"}
        description={"portfolio de denis farkas, version 2022"}
      >
        <div className={styles.projet}>
          <div className={styles.example}>
            <Image
              className={styles.imagen}
              src="/img/chevron2.png"
              width={269}
              height={80}
              alt="déco"
            />
            <div className={styles.title_section}>
              <h2>PROJET : {current.name}</h2>
            </div>
          </div>
          <Gallery current={current} />
          <Presentation current={current} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const projets = await prisma.project.findMany();
  const paths = projets.map((projet) => ({
    params: {
      url: projet.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { url } }) => {
  const prisma = new PrismaClient();
  const site = await prisma.project.findMany({
    where: {
      url: {
        contains: url,
      },
    },
  });
  console.log(site[0]);
  return {
    props: {
      site,
    },
  };
};
