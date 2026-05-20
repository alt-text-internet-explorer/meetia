// Navbar.js
"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      {/* Website Name, fixed position */}
      <div className={styles.logo}>Meetia</div>

      {/* Toggle Menu Button for Mobile View */}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
        ☰
      </button>

      {/* Links for Desktop View */}
      <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new-review">New Review</Link>
        </li>
        <li>
          <Link href="/profile">User Profile</Link>
        </li>

        <li className={styles.authGroup}>
          <Link href="/login">Login</Link>
          <span>or</span>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}
