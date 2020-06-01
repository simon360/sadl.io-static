import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/seo"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allWorkJson {
        edges {
          node {
            company
            logo {
              type
              src
            }
            positions {
              time
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <Section>
        <p>It’s a website. On The Internet.</p>

        <ul>
          {data.allWorkJson.edges.map(
            ({
              node: {
                company,
                logo: { type: logoType, src: logoSrc },
                positions,
              },
            }) => (
              <li key={company}>
                {logoType &&
                  logoSrc &&
                  (function () {
                    if (logoType === "raster") {
                      return (
                        <img
                          src={require(`../images/${logoSrc}`)}
                          style={{ maxWidth: "200px" }}
                        />
                      )
                    } else {
                      const Logo = require(`../images/${logoSrc}`)
                      return (
                        <Logo height={null} style={{ maxWidth: "200px" }} />
                      )
                    }
                  })()}
                <Heading element="h2" type="md">
                  {company}
                </Heading>
                <ul>
                  {positions.map(({ time, title }) => (
                    <li key={time}>
                      <strong>{title}</strong>, {time}
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </Section>
    </Layout>
  )
}
