import React from "react"

import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <p>It’s a website. On The Internet.</p>
    </Section>
  </Layout>
)

export default IndexPage
