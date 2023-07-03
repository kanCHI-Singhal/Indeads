"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Corousel from '@/components/corousel';
import Corouselindi from '@/components/indicorousel';


export default function Home() {
  
  return (
    <main className={styles.main}>
      
          <h1 className={styles.Typewriter}>
            <Typewriter
              options={{
                strings: ['InDiAds', 'Show', 'Earn', 'Grow', 'With...'],
                autoStart: true,
                loop: true,
              }} />
          </h1>
          <div className={styles.flexContainerimage}>
              <div className={styles.flexContentimage}>
                    <div className={styles.Image}>
                      <Corouselindi/>  
                    </div>
              </div>
              <div className={styles.flexContentimage}>
                    <div className={styles.Image}>
                        <Corousel/> 
                    </div>
              </div>
          </div>
      


      <div className={styles.flexContainer}>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link className={styles.link} href='/business'>Business</Link></p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}><Link className={styles.link} href='/Advertise'> Advertise</Link> </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link className={styles.link} href='/Users'> Happy Clients</Link> </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}>  <Link className={styles.link} href='Pendings'> Upcoming Projects </Link> </p>
        </div>
      </div>
    </main>
  )
}
