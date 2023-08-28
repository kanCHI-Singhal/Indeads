"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React,{ useState, useEffect} from 'react'
import "../app/globals.css"


export default function Navbar (){

    return(
      <nav className='nav-parent'>

          <ul className = "nav">
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

