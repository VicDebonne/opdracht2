import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Opdracht 2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
       <p>Let's go!</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vic Debonne
        </a>
      </footer>
    </div>
  )
}
