import React from "react";

import { Wrapper } from "../components";

import { Hero, AboutMe, Skills, Projects, Blog, Footer } from "../sections";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <div className={styles.workEducation} />
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
