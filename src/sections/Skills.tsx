import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/Heading";
import { GoTools } from "../components/Icons";
import styles from "./Skills.module.css";

function Skills() {
  const {
    allSkillsJson: { edges },
  } = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon
          }
        }
      }
    }
  `);
  return (
    <section id="skills">
      <Heading icon={GoTools} title="Habilidades" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {edges.map(({ node }, index: number) => (
          <div
            key={node.id}
            className={`${styles.skill} md:mr-5 wow fadeIn`}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <div className="flex items-center">
              <img src={node.icon} className="w-5 h-5 mr-5" alt={node.name}/>
              <div>
                <h6 className="text-xs font-semibold leading-none">
                  {node.name}
                </h6>
                <h6
                  className="mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                  ({node.tech})
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
