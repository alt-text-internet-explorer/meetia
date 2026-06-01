"use client"

import { useAuth } from "@/utils/authContext"
import styles from "@/components/logout/LogoutButton.module.css"

// make sure to update the state of the component with the logout button
// based on whether the user is loggedin or not.
// that way the ui properly updates, simply useState()
// example: <LogoutButton onLogout={() => setLoggedIn(false)} />

export default function LogoutButton({ onLogout }) {
  const { logout } = useAuth()

  return (
    <button className={styles.button} onClick={() => logout("/login")}>
      Logout
    </button>
  )
}
