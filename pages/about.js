import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../shared/styles/page.module.css'

export default function About({ user }) {

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>About</h1>
          <Image src={user.avatar_url} alt="Vercel Logo" width={150} height={150} />

          <p>{user.name}</p>
          <p>Public repos: {user.public_repos}</p>

        </main>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  try {
    const res = await fetch('https://api.github.com/users/luizaprata')
    const user = await res.json()

    if (res.status > 200)
      return { notFound: true }

    return {
      props: {
        user,
      },
    }
  } catch {
    return { notFound: true }
  }
}
