import { useState } from "react";
import Image from "next/future/image";

import styles from "../styles/gallery.module.css";

const Gallery = ({ current }) => {
  const { image_1, image_2, image_3, image_4 } = current;

  const pictures = [image_1, image_2, image_3, image_4];

  const [imageToShow, setImageToShow] = useState(pictures[0]);

  function defineImage(id) {
    setImageToShow(pictures[id]);
  }

  function isActive(n) {
    const thumb = document.querySelectorAll(".thumbCl");
    console.log(thumb);
    thumb.forEach((element) => element.classList.remove(styles.selected));
    thumb[n].classList.add(styles.selected);
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_body}>
        <Image
          className={styles.image_big}
          src={`/img/${imageToShow}`}
          width={600}
          height={400}
          alt="projet"
        />
      </div>
      <div className={styles.gallery_footer}>
        <div
          className={`thumbCl ${styles.thumb}`}
          tabIndex="0"
          onClick={(e) => {
            defineImage(0);
            isActive(0);
          }}
        >
          <Image
            className={styles.image_thumb}
            src={`/img/${image_1}`}
            width={123}
            height={88}
            alt="thumbnail projet 1"
          />
        </div>
        <div
          className={`thumbCl ${styles.thumb}`}
          tabIndex="0"
          onClick={(e) => {
            defineImage(1);
            isActive(1);
          }}
        >
          <Image
            className={styles.image_thumb}
            src={`/img/${image_2}`}
            width={123}
            height={88}
            alt="thumbnail projet 2"
          />
        </div>
        <div
          className={`thumbCl ${styles.thumb}`}
          onClick={(e) => {
            defineImage(2);
            isActive(2);
          }}
          tabIndex="0"
        >
          <Image
            className={styles.image_thumb}
            src={`/img/${image_3}`}
            width={123}
            height={88}
            alt="thumbnail projet 3"
          />
        </div>
        <div
          className={`thumbCl ${styles.thumb}`}
          onClick={(e) => {
            defineImage(3);
            isActive(3);
          }}
          tabIndex="0"
        >
          <Image
            className={styles.image_thumb}
            src={`/img/${image_4}`}
            width={123}
            height={88}
            alt="thumbnail projet 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
