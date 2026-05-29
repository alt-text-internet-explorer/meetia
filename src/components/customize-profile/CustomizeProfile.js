"use client"
import React, { useRef } from "react"
import { useState } from "react"
import styles from "./CustomizeProfile.module.css"

function Customize(props) {
  const formRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    try {
      let response = await fetch("/api/submitform", {
        method: "POST",
        body: formData,
      })
      response = await response.json()
      alert(`Changes Saved!`)
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error)
    }
    formRef.current.reset() //Clear all inputs
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <label>Profile Picture</label>
          <input
            type="image"
          />
          <label htmlFor="title">Display Name </label>
          <input
            type="text"
            name="title"
            className={styles.inputTitle}
            required
          />

          <label htmlFor="rbody">Bio </label>
          <textarea
            type="text"
            name="rbody"
            className={styles.inputBody}
            required
          />

          <button type="submit" className={styles.button}>
            Save Changes{" "}
          </button>
        </ul>
      </div>
    </form>
  )
}

export default Customize
