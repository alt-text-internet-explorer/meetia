"use client"
import React, { useRef } from "react"
import Image from "next/image"
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
      <h3>Customize User Profile</h3>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <div>
            <label htmlFor="image-upload">Profile Picture</label>
            <br />
            <input type="file" id="image-upload" accept="image/*" />
          </div>
          <div>
            <label htmlFor="display-name">Display Name </label>
            <br />
            <input
              type="text"
              name="display-name"
              className={styles.inputTitle}
              required
            />
          </div>
          <div>
            <label htmlFor="my-interests">My Interests </label>
            <textarea
              type="text"
              name="my-interests"
              className={styles.inputBody}
              required
            />
          </div>
          <div>
            <label htmlFor="about-me">About Me </label>
            <textarea
              type="text"
              name="about-me"
              className={styles.inputBody}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Save Changes{" "}
          </button>
        </ul>
      </div>
    </form>
  )
}

export default Customize
