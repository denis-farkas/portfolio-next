import Image from "next/future/image";

import styles from "../styles/infos.module.css";

const Infos = () => {
  return (
    <div className={styles.contains}>
      <div id="projets" className={styles.infos_header}>
        <h2 className={styles.center_text}>
          Quelques exemples de réalisations orientées:
        </h2>
      </div>
      <div className={styles.infos_body}>
        <div className={styles.infos_left}>
          <div className={styles.card_infos}>
            <div className={styles.card_header}>
              <div className={styles.example}>
                <Image
                  className={styles.imagen}
                  src="/img/chevron2.png"
                  width={134}
                  height={40}
                  alt="déco"
                />
                <div className={styles.title_section}>
                  <h2>FRONT-END</h2>
                </div>
              </div>
            </div>
            <div className={styles.card_body}>
              <p className={styles.infos_text}>
                Combiner différents éléments pour former un ensemble cohérent,
                esthétique et fonctionnel, favorisant l’expérience du visiteur.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.infos_right}>
          <div className={styles.card_infos}>
            <div className={styles.card_header}>
              <div className={styles.example}>
                <Image
                  className={styles.imagen}
                  src="/img/chevron2.png"
                  width={134}
                  height={40}
                  alt="déco"
                />
                <div className={styles.title_section}>
                  <h2>BACK-END</h2>
                </div>
              </div>
            </div>

            <div className={styles.card_body}>
              <p className={styles.infos_text}>
                Gérer les données du site et de l’utilisateur, les
                communications entre différents serveurs, tout en maintenant la
                conformité avec les politiques d’accessibilité et de sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
