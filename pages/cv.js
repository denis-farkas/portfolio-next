import Link from "next/link";
import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/cv.module.css";
import useDownloader from "react-use-downloader";

export default function Cv() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/files/cv.pdf";
  const filename = "cv.pdf";
  return (
    <>
      <Layout
        title={"Accueil"}
        description={"portfolio de denis farkas, version 2022"}
      >
        <div className={"contenedor"}>
          <div className={styles.center}>
            <div classNmae={styles.download}>
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
                src="/img/cvImage.jpg"
                width={700}
                height={991}
                alt="cv"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
