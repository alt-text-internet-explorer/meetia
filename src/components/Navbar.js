"use client"

import Link from "next/link"
import styles from "./Navbar.module.css"
import { useState } from "react"
<<<<<<< HEAD

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
=======
import { useAuth } from "@/utils/authContext"
import LogoutButton from "./logout/LogoutButton"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { loggedIn } = useAuth()
>>>>>>> eb59bcc (Add a auth context provider to fix hydration issue)

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
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/new-review" onClick={() => setIsOpen(false)}>
            New Review
          </Link>
        </li>
        <li>
          <Link href="/profile" onClick={() => setIsOpen(false)}>
            User Profile
          </Link>
        </li>
        <li>
          <Link href="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </li>
<<<<<<< HEAD
=======

        {loggedIn ? (
          <li>
            <LogoutButton onLogout={() => (loggedIn = false)} />
          </li>
        ) : (
          <li className={styles.authGroup}>
            <Link href="/login">Login</Link>
            <span>or</span>
            <Link href="/signup">Sign Up</Link>
          </li>
        )}
>>>>>>> eb59bcc (Add a auth context provider to fix hydration issue)
      </ul>
    </nav>
  )
}
