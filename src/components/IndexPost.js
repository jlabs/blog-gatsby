import React from "react"
import { graphql } from "gatsby"
export default function IndexPost( props ) {
  return (
      <query/>
  )
}
export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      description
    }
  }
`