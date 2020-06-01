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
          {data.allWorkJson.edges.map(({ node: { company, positions } }) => (
            <li key={company}>
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
          ))}
        </ul>
      </Section>
    </Layout>
  )
}
