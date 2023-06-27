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
                strings: ['InDeADS', 'Show', 'Earn','Grow','With...'],
                autoStart: true,
                loop: true,
              }}/> 
            </h1>
      <div className={styles.flexContainer}>
        <div className={styles.flexContent}> 
              <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.para}> <Link href='/business'>Business</Link></p>
                </div>
                <div className={styles.flipcardback}>
                    <p className={styles.para}> Goto Business page </p>  
                </div>                
              </div>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> Advertise </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> Our Mission </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> Our Mission </p>
        </div>
      </div>
    </main>
  )
}
