"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useRedirectIfLoggedIn } from "@/utils/authRedirect"

export default function LoginPage() {
  useRedirectIfLoggedIn()
  const router = useRouter()

  const [creds, setCreds] = useState({
    username: "",
    pwd: "",
  })

  const [message, setMessage] = useState("")

  function handleChange(event) {
    const { name, value } = event.target

    setCreds({
      ...creds,
      [name]: value,
    })
  }

  async function submitForm(event) {
    event.preventDefault()

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })

    if (response.status === 200) {
      const payload = await response.json()
      localStorage.setItem("token", payload.token)
      setMessage("Login successful")
      router.push("/")
    } else {
      setMessage("Login failed")
    }
  }

  return (
    <form onSubmit={submitForm}>
      <h1>Login</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={creds.username}
        onChange={handleChange}
      />

      <label htmlFor="pwd">Password</label>
      <input
        type="password"
        name="pwd"
        id="pwd"
        value={creds.pwd}
        onChange={handleChange}
      />

      <button type="submit">Log In</button>

      <p>{message}</p>
    </form>
  )
}
