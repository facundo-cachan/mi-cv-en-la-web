import React from "react";
import styles from "./index.module.css";

import { Wrapper } from "../components";

import {
  AboutMe,
  Blog,
  Footer,
  Hero,
  Projects,
  Skills,
} from "../sections";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <div className={styles.workEducation}>
        </div>
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
