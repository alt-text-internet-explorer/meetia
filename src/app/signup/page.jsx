"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useRedirectIfLoggedIn } from "@/utils/authRedirect"

export default function SignupPage() {
  useRedirectIfLoggedIn()
  const router = useRouter()

  const [creds, setCreds] = useState({
    username: "",
    email: "",
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

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })

    if (response.status === 201) {
      const payload = await response.json()
      localStorage.setItem("token", payload.token)
      setMessage("Signup successful")
      router.push("/")
    } else {
      setMessage("Signup error")
    }
  }

  return (
    <form onSubmit={submitForm}>
      <h1>Sign Up</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={creds.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={creds.email}
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

      <button type="submit">Sign Up</button>

      <p>{message}</p>
    </form>
  )
}
