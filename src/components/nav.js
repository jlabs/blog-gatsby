import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import ProjectCategories from '../components/ProjectCategories'
import PostCategories from '../components/PostCategories'

export default function Nav() {
    const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
                }
                allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "project"}}}) {
                    distinct(field: frontmatter___category)
                }
                allFile(filter: {relativeDirectory: {eq: "pages"}}) {
                    nodes {
                        name
                        id
                    }
                }
			}
		`
    )
    return (
        <div>
            <Link to={`/`} className='block hover:text-white text-3xl text-gray-300' activeClassName='text-gray-500'>
                {data.site.siteMetadata.title}
            </Link>
            <Link to={`/dad/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                Dad
            </Link>
            <Link to={`/dev/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                Dev
            </Link>
            <Link to={`/til/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                TIL
            </Link>
            <Link to={`/posts/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                Blog
            </Link>
                <PostCategories/>
            <Link to={`/projects/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                Projects
            </Link>
                <ProjectCategories/>
            <Link to={`/about/`} className='block hover:text-white my-2 text-gray-300' activeClassName='text-gray-500'>
                What I'm ...
            </Link>
        </div>
    )
}