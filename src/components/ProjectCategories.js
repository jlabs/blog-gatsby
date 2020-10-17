import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function ProjectCategories() {
    const data = useStaticQuery(
		graphql`
			query {
                allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "project"}}}) {
                    group(field: frontmatter___category) {
                        totalCount
                        fieldValue
                    }
                }
			}
		`
    )
    return (
        <div>
            <ul className='ml-2'>
                {data.allMarkdownRemark.group.map((node, i) => (
                    <li key={i}>
                        <Link to={`/`}>{node.fieldValue} ({node.totalCount})</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}