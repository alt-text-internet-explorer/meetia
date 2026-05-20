"use client"

import { useRouter } from "next/navigation"

// make sure to update the state of the component with the logout button
// based on whether the user is loggedin or not.
// that way the ui properly updates, simply useState()
// example: <LogoutButton onLogout={() => setLoggedIn(false)} />

export default function LogoutButton({ onLogout }) {
  const router = useRouter()
  function handleClick() {
    localStorage.removeItem("token")

    if (onLogout) {
      // executes the function passed from the parent
      onLogout()
    }
    router.push("/login")
  }
  return <button onClick={handleClick}>Logout</button>
}
