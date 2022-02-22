import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../shared/styles/page.module.css'
import { useRouter } from 'next/router'

export default function Post({ url }) {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.title}</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>{router.query.title}</h1>
          <p>Cupidatat eu sit aliqua incididunt sint cupidatat labore incididunt culpa reprehenderit consequat. Cupidatat id mollit aliquip mollit aute non. Ipsum magna cupidatat pariatur laboris eu proident ut dolore aliquip ut.</p>
        </main>
      </Layout>
    </>
  )
}

