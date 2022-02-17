import Image from "next/image";
import Link from "next/link";
import styles from './layout.module.css'

export function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <Link href={'/'}>
          <a>home</a>
        </Link>
        <Link href={'/about'}>
          <a>about</a>
        </Link>
        <Link href={'/hire-me'}>
          <a>hire-me</a>
        </Link>
      </header>
      {children}
      <footer>
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}