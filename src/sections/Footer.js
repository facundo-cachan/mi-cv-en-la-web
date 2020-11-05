import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Heading, Icons } from "../components";

const Footer = () => {
  const { FaInfoCircle, /* FaStar */ } = Icons;
  const {
    markdownRemark: { html },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-rotw" } }) {
        html
      }
    }
  `);

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Mi CV en la Web" />
      <div
        className="text-justify w-full md:w-4/5 lg:w-3/4 wow fadeIn"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/*
      <Button
        className="mt-6"
        icon={FaStar}
        title="Agradecimiento"
        onClick={() =>
          window.open(
            "https://github.com/AmruthPillai/ResumeOnTheWeb-Gatsby",
            "_blank",
          )
        }
      />
      */}
      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Licencia MIT.</div>
        <div>
          Copyright {new Date().getFullYear()} Facundo Cachan. | Design by <a target="_blank" rel="noopener noreferrer" href="https://amruthpillai.com/"> Amruth Pillai</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
