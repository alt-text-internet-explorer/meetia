"use client"

import { useState } from "react"
import { useAuth } from "@/utils/authContext"

export default function SignupPage() {
  const { login } = useAuth()

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

    const payload = await response.json()

    if (response.ok) {
      setMessage("Signup successful")

      login(payload.token, "/")
    } else {
      setMessage(payload.error || "Signup failed")
    }
  }

const SignUp = () => {
  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default SignUp
