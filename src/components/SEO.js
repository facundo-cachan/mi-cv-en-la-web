import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const {
    site: {
      siteMetadata: { title, description, author, siteUrl, phone, email },
    },
    file: { image },
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
      file(relativePath: { eq: "share.png" }) {
        publicURL
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
          content: image,
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
            "@type": "Person",
            "url": "${siteUrl}",
            "name": "${author}",
            "image": "/yo.jpg",
            "email": "mailto:${email}",
            "jobTitle": "Desarrollador de software",
            "telephone": "${phone}",
            "employee":{
              "@type": "Organization",
              "url" : "http://globy.solutions/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Argentina, Buenos Aires",
                "postalCode": "1098",
              },
              "email": "dev@globy.solutions",
              "name": "Globy Solutions"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
