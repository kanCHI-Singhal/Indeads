"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const Navbar = ()=>{
    return(
        <nav>
          <ul className="nav">
                <li className='nav-link' >
                  <Link className='link' href="/">Home</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Link</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Link</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Disabled</Link>
                </li>
              </ul>
          </nav>
    )
}

export default Navbar