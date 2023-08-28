"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React,{ useState, useEffect} from 'react'
import "../app/globals.css"
import Collapsible from 'react-collapsible'


export default function Navbar (){

    return(
      <nav className='nav-parent'>
      <Collapsible trigger="click me">
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
      </Collapsible>  
      </nav>
    )
}

