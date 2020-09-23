import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const categories = data.allMarkdownRemark;
  console.log(categories)
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>Desc = {post.description}</h3>
        <ul>
          <li>hi</li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const AllPostsQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`