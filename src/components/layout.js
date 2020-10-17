import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'

// ig feed = https://www.instagram.com/geek_father/?__a=1

export default function Layout({ children }) {
	return (
	<div className='grid grid-cols-3 h-screen'>
		<div className='p-2 col-span-2'>
			{children}
		</div>
		<div className="bg-purple-700 p-6 flex flex-col">
			<div className='flex-grow'>
				<Nav/>
				
			</div>
			<div>
				<Link to={'/got-made/'} className='text-gray-300'>
					Made with ...
				</Link>
			</div>
		</div>		
	</div>
	)
}