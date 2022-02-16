import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../shared/styles/page.module.css'

export default function HireMe() {
  return (
    <>
      <Head>
        <title>Hire me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>Hire me</h1>
        </main>
      </Layout>
    </>
  )
}
