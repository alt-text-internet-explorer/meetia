// Navbar.js
"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { Logout } from "@/components/logout"

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
      </ul>
    </nav>
  )
}
