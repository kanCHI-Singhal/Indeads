"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

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
      <div className={styles.Image}>
        <img src=''></img>
      </div>


      <div className={styles.flexContainer}>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link href='/business'>Business</Link></p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}><Link href='/Advertise'> Advertise</Link> </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link href='/Users'> Happy Clients</Link> </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}>  <Link href='Pendings'> Upcoming Projects </Link> </p>
        </div>
      </div>
    </main>
  )
}
