import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Meetia</div>
      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">User Profile</Link>
        </li>
        <li>
          <Link href="/new-review">New Review</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
