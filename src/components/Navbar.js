"use client"

import Link from "next/link"
import Image from "next/image"
import logoImg from "./Meetia.png"
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
      <div>
        <Image
          src={logoImg}
          alt="Meetia logo"
          height={60}
          style={{ width: "auto" }}
        />
      </div>

      {/* Toggle Menu Button for Mobile View */}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
        ☰
      </button>

      {/* Links for Desktop View */}
      {loggedIn ? (
        <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
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
            <LogoutButton onLogout={() => (loggedIn = false)} />
          </li>
        </ul>
      ) : (
        <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/new-review">New Review</Link>
          </li>
          <li className={styles.authGroup}>
            <Link href="/login">Login</Link>
            <span> or </span>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
