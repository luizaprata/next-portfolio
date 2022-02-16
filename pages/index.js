import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Home</h1>

        <Link href={'/about'}>
            <a>about</a>
          </Link>
        <span className={styles.logo}>
          
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </main>
    </div>
  )
}
