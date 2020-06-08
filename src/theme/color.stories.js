import React from "react"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import VerticalSpacing from "../components/VerticalSpacing"

import "./index.css"

export default {
  title: "Theme|Color",
}

const ColorGroup = ({ children }) => (
  <div
    style={{
      borderRadius: "0.5rem",
      display: "inline-flex",
      margin: "0 1rem 1rem 0",
      overflow: "hidden",
      width: "auto",
    }}
  >
    {children}
  </div>
)

const IndividualColor = ({ value }) => (
  <div
    style={{
      backgroundColor: value,
      height: "4rem",
      width: "4rem",
    }}
  />
)

export const Color = () => (
  <>
    <Heading element="h1" type="xl">
      Color
    </Heading>

    <Paragraph>The colors in the system</Paragraph>

    <Heading element="h2" type="sm">
      Purple
    </Heading>
    <VerticalSpacing size="sm" />
    <ColorGroup>
      <IndividualColor value="var(--color-base-purple-lighter)" />
      <IndividualColor value="var(--color-base-purple)" />
      <IndividualColor value="var(--color-base-purple-darker)" />
    </ColorGroup>
    <VerticalSpacing size="md" />

    <Heading element="h2" type="sm">
      Neutral
    </Heading>
    <VerticalSpacing size="sm" />
    <ColorGroup>
      <IndividualColor value="var(--color-neutral-100)" />
      <IndividualColor value="var(--color-neutral-200)" />
      <IndividualColor value="var(--color-neutral-300)" />
      <IndividualColor value="var(--color-neutral-400)" />
      <IndividualColor value="var(--color-neutral-500)" />
      <IndividualColor value="var(--color-neutral-600)" />
      <IndividualColor value="var(--color-neutral-700)" />
      <IndividualColor value="var(--color-neutral-800)" />
      <IndividualColor value="var(--color-neutral-900)" />
    </ColorGroup>
    <VerticalSpacing size="md" />
  </>
)
