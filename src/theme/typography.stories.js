import React from "react"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"

export default {
  title: "Theme|Typography",
}

const TextSizes = () => (
  <>
    <p style={{ fontSize: "var(--font-size-base-down-2" }}>
      Down 2: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-down-1" }}>
      Down 1: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base" }}>
      Base: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-1" }}>
      Up 1: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-2" }}>
      Up 2: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-3" }}>
      Up 3: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-4" }}>
      Up 4: The quick brown fox jumps over the lazy dog
    </p>
  </>
)

export const Typography = () => (
  <>
    <Heading element="h1" type="xl">
      Typography
    </Heading>

    <Paragraph>
      All of the base typography styles/tokens in the system. In general, the
      use of the Heading and Paragraph components is preferred.
    </Paragraph>

    <TextSizes />

    <div style={{ fontWeight: "var(--font-weight-bold" }}>
      <TextSizes />
    </div>
  </>
)
