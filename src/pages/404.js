import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>Hm… that page doesn’t exist.</p>

    <ul>
      <li>
        The page you’re looking for may have been moved elsewhere. Try searching
        for the content you expected.
      </li>
      <li>This page may have momentarily disappeared. Try reloading.</li>
      <li>
        You may have followed an inactive link. Check with whomever provided it.
      </li>
    </ul>
  </Layout>
)

export default NotFoundPage
