"use client"
import React from "react"
import { useState } from "react"
import { useAuth } from "@/utils/authContext"
import styles from "./LoginForm.module.css"

function LoginPage() {
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

  return (
    <form onSubmit={submitForm}>
      <h1>Login</h1>
      <div className={styles.form}>
        <div className={styles.formcont}>
          <div className={`${styles.inputGroup} form-group`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={creds.username}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.inputGroup} form-group`}>
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={creds.pwd}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className={styles.inputGroup}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </div>
      </div>
      <p>{message}</p>
    </form>
  )
}

export default LoginPage
