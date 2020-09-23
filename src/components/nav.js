import React from "react"
import { Link } from "gatsby"

export default function Nav({ props }) {
return (
    <div>
        <Link to={`/`} className='block hover:text-white text-3xl' activeClassName='text-gray-500'>
            {props.title}
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
  )
}