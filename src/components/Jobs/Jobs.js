import React from "react"

import { wrapper } from "./Jobs.module.css"

export default function Jobs({ children }) {
  return <ul className={wrapper}>{children}</ul>
}
