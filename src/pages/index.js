import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
	return (
		<Layout>
			<div className='flex flex-wrap'>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<Link key={node.id} to={node.fields.slug} className='lg:w-1/2 xl:w-1/3 mr-1'>
						<div className='rounded overflow-hidden shadow-lg mb-2'>
							<div className='px-6 py-4'>
								<div className='font-bold text-xl mb-2'>
										{node.frontmatter.title}
								</div>
								<p className='text-gray-700 text-base'>
									{node.excerpt}
								</p>
							</div>							
						</div>
					</Link>
				))}
			</div>
		</Layout>
	)
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {posttype: {eq: "blog-post"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
	}
	distinct(field: frontmatter___tags)
  }
}

`