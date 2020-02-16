import React from "react"

import Heading from "../components/Heading"
import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <Heading element="h1" type="xl">
        Now this is the story
      </Heading>
      <Heading element="h2" type="lg">
        All about how
      </Heading>
      <Heading element="h2" type="md">
        My life got flipped
      </Heading>
      <Heading element="h2" type="sm">
        Turned upside down
      </Heading>

      <p>
        And I’d like to take a minute, just sit right there. I'll tell you how I
        became the prince of a town called Bel-Air.
      </p>
    </Section>
  </Layout>
)

export default IndexPage
