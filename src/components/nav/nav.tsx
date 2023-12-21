import React from "react";
import Image from "next/image";

import homeSvg from "./Home.svg";
import aboutSvg from "./info-circle-line-icon 1.svg";
import contactSvg from "./Vector (1).svg";

import styles from "./nav.module.css";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <div className={styles.center}>
          <Image src={homeSvg} alt="home" />
          Home
        </div>
      </Link>
      <a href="mailto:jonathansalazar9000@gmail.com">
        <div className={styles.contact}>
          <Image src={contactSvg} alt="contact" />
        </div>
      </a>
      <Link href="/about">
        <div className={styles.center}>
          <Image src={aboutSvg} alt="about" />
          About
        </div>
      </Link>
    </div>
  );
};
