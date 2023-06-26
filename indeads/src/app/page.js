import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1> InDeADS </h1>
     {/*} <div>
       <Typewriter
              options={{
                        strings: ['InDeADS', 'Show', 'Earn','Grow','With...'],
                        autoStart: true,
                        loop: true,
              }}/> 
            </div>{*/}
      <div className={styles.flexContainer}>
        <div className={styles.flexContent}> 
          <p className={styles.para}> Business </p>
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
