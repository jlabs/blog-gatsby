import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

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
				<Link to={`/`} className='block hover:text-white text-3xl' activeClassName='text-gray-500'>
					{data.site.siteMetadata.title}
				</Link>
				<Link to={`/til/`} className='block hover:text-white my-2' activeClassName='text-gray-500'>
					TIL
				</Link>
				<Link to={`/projects/`} className='block hover:text-white my-2' activeClassName='text-gray-500'>
					Projects
				</Link>
				<Link to={`/about/`} className='block hover:text-white my-2' activeClassName='text-gray-500'>
					Hey! You!
				</Link>
			</div>
			<div className=''>
				<Link to={'/got-made/'}>
					Made with ...
				</Link>
			</div>
		</div>		
	</div>
	)
}