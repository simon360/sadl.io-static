import React from "react"

import Section from "../Section"

export default function Footer() {
  return (
    <footer>
      <Section verticalPadding="0.5rem">© {new Date().getFullYear()}</Section>
    </footer>
  )
}
