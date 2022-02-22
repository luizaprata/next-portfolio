import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../shared/styles/page.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>HOME</h1>
        </main>
      </Layout>
    </>
  )
}
