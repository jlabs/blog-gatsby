import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Dev({ data }) {
  return (
    <Layout>
      <h1>Dev</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`