import styles from './NavMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/logo.svg" width={216} height={30} alt="Nextspace logo" />
      </Link>

      <ul className={styles.links}>
        <li>
            <Link href={'/about'}>About</Link>
        </li>
        <li>
            <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
            <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
