"use client"

import { useAuth } from "@/utils/authContext"

// make sure to update the state of the component with the logout button
// based on whether the user is loggedin or not.
// that way the ui properly updates, simply useState()
// example: <LogoutButton onLogout={() => setLoggedIn(false)} />

export default function LogoutButton({ onLogout }) {
  const { logout } = useAuth()

  return <button onClick={() => logout("/login")}>Logout</button>
}
