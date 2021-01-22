import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const {
    site: {
      siteMetadata: { title, description, author, siteUrl, phone, email },
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          phone
          email
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      defer={false}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: "/image/icon.png",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "name": "Desarrollador de Software",
            "datePosted": "2020/01/01",
            "title": "Ingeniero de Software",
            "industry": "Desarrollo de Software",
            "description": "${description}",
            "employmentType": "Part-time",
            "baseSalary": "1000",
            "validThrough": "2020/01/07",
            "jobLocation": {
              "@type": "Place",
              "name": "Globy Solutions",
              "email": "dev@globy.solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chacabuco 1565",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "postalCode": "B1066"
              }
            },
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Globy Solutions",
              "email": "dev@globy.solutions"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
