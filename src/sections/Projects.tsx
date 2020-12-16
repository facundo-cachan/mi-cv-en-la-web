import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { Button, Heading, Icons } from "../components";
import styles from "./Projects.module.css";

function Projects() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            github
            image
          }
        }
      }
    }
  `);

  return (
    <section id="projects">
      <Heading icon={Icons.FaDev} title="Proyectos" />
      <div className={styles.container}>
        {data.allProjectsJson.edges.map(({ node }, index: number) => (
          <div
            key={node.id}
            className={`${styles.project} wow fadeIn`}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <OutboundLink
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <Icons.FaLink className="absolute" color="#FFF" size="5rem" />
              <img
                alt={node.title}
                src={node.image}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <h5 className="mt-4 font-semibold">{node.title}</h5>
            <p className="mt-2 pb-5 text-sm text-justify">{node.description}</p>
            <p className="pb-2 flex text-xs font-semibold">
              {node.tags.map(x => (
                <span key={x} className="mr-2">
                  #{x}
                </span>
              ))}
            </p>
            <div className="flex mt-2">
              {node.website && (
                <OutboundLink
                  href={node.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 mr-2 hover:text-primary-500"
                >
                  <Icons.FaLink />
                  <span className="sr-only">Website</span>
                </OutboundLink>
              )}
              {node.github && (
                <OutboundLink
                  href={node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 mr-2 hover:text-primary-500"
                >
                  <Icons.FaGithub />
                  <span className="sr-only">GitHub Repo</span>
                </OutboundLink>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button
        className="mt-6"
        icon={Icons.FaGithub}
        title="Proyectos en GitHub"
        onClick={() =>
          window.open("https://github.com/facundo-cachan/", "_blank")
        }
      />
    </section>
  );
}

export default Projects;
