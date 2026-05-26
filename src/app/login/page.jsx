"use client"

import { useState } from "react"
import { useAuth } from "@/utils/authContext"

export default function LoginPage() {
  const { login } = useAuth()

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

    const payload = await response.json()

    if (response.ok) {

      setMessage("Login successful")

      login(payload.token, "/")

    } else {

      setMessage(payload.error || "Login failed")

    }
  }

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login
