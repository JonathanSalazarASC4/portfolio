import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

import linkedinSVG from "./linkedin.svg";
import discordSVG from "./discord-black-icon 1.svg";
import envelope from "./envelope.svg";
import github from "./github.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.center}>
        Copyright 2023 Jonathan Salazar, All Rights Reserved.
      </div>
      <div className={styles.center}>
        <div className={`${styles.greenCircle} ${styles.center}`}>
          <Image src={linkedinSVG} alt="linkedin" />
        </div>
        <div className={`${styles.greenCircle} ${styles.center}`}>
          <Image src={discordSVG} alt="discord" />
        </div>
        <div className={`${styles.greenCircle} ${styles.center}`}>
          <Image src={envelope} alt="contact" />
        </div>
        <Image src={github} alt="github" />
      </div>
    </div>
  );
};
