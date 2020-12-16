import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Heading, Icons } from "../components";

function AboutMe() {
  const data = useStaticQuery(graphql`
      {
        markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
          html
        }
      }
    `);

  return (
    <section id="about-me">
      <Heading icon={Icons.MdPerson} title="Sobre Mi" />
      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <img src="/images/about-me/selfie-boy.png" alt="Facundo Cachan" srcSet="/images/about-me/selfie-boy.png"/>
        </div>
        <div
          className="text-justify lg:col-span-4 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  );
}

export default AboutMe;
