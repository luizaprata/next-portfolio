import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import styles from '../shared/styles/page.module.css'


const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`post/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li >
)

export default function Blog() {

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>Blog</h1>
          <ul>
            <PostLink slug="angular" title="Angular Post" />
            <PostLink slug="nextjs" title="Nextjs Post" />
          </ul>
        </main>
      </Layout>
    </>
  )
}

