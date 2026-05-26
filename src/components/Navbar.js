"use client"

import Link from "next/link"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { useAuth } from "@/utils/authContext"
import LogoutButton from "./logout/LogoutButton"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { loggedIn } = useAuth()

  return (
    <nav className={styles.nav} data-cy="nav">
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

        {loggedIn ? (
          <li>
            <LogoutButton onLogout={() => (loggedIn = false)} />
          </li>
        ) : (
          <li className={styles.authGroup}>
            <Link href="/login">Login</Link>
            <span> or </span>
            <Link href="/signup">Sign Up</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
