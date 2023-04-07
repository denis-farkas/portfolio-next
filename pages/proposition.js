import Link from "next/link";
import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/cv.module.css";
import useDownloader from "react-use-downloader";

export default function Cv() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/files/proposition.pdf";
  const filename = "proposition.pdf";
  return (
    <>
      <Layout
        title={"Accueil"}
        description={"portfolio de denis farkas, version 2022"}
      >
        <div className={"contenedor"}>
          <div className={styles.center}>
            <div className={styles.download}>
              <button
                className={styles.button_download}
                onClick={() => download(fileUrl, filename)}
              >
                Cliquez pour télécharger au format PDF
              </button>
              {error && <p>possible error {JSON.stringify(error)}</p>}
            </div>
            <div className={styles.container_image}>
              <Image
                className={styles.img}
                src="/img/proposition.png"
                width={1119}
                height={792}
                alt="proposition"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
