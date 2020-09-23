import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Nav from '../components/nav'

// ig feed = https://www.instagram.com/geek_father/?__a=1

export default function Layout({ children }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	return (
	<div className='grid grid-cols-3 h-screen'>
		<div className='p-2 col-span-2'>
			{children}
		</div>
		<div className="bg-purple-700 p-6 flex flex-col">
			<div className='flex-grow'>
				<Nav title={data.site.siteMetadata.title}/>
				
			</div>
			<div>
				<Link to={'/got-made/'}>
					Made with ...
				</Link>
			</div>
		</div>		
	</div>
	)
}