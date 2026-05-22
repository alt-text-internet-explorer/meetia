"use client"

<<<<<<< HEAD
import { useRouter } from "next/router"
=======
import { useAuth } from "@/utils/authContext"
>>>>>>> eb59bcc (Add a auth context provider to fix hydration issue)

// make sure to update the state of the component with the logout button
// based on whether the user is loggedin or not.
// that way the ui properly updates, simply useState()
// example: <LogoutButton onLogout={() => setLoggedIn(false)} />

export default function LogoutButton({ onLogout }) {
<<<<<<< HEAD
  const router = useRouter

  function handleClick() {
    localStorage.removeItem("token")

    if (onLogout) {
      // executes the function passed from the parent
      onLogout()
    }

    router.push("/login")
  }
  return <button onClick={handleClick}>Logout</button>
=======
  const { logout } = useAuth()

  return <button onClick={() => logout("/login")}>Logout</button>
>>>>>>> eb59bcc (Add a auth context provider to fix hydration issue)
}
