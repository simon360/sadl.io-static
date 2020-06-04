import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Jobs, { Job } from "../components/Jobs"
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/seo"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allWorkJson {
        edges {
          node {
            brandColor
            company
            isFocus
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
        <Jobs>
          {data.allWorkJson.edges.map(({ node }) => (
            <Job key={node.company} {...node} />
          ))}
        </Jobs>
      </Section>
    </Layout>
  )
}
