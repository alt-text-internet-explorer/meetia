"use client"

import React, { useRef, useState } from "react"
import styles from "./collectionForm.module.css"
import { addAuthHeader } from "@/utils/authFetch"

function Customize() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (loading) return
    setLoading(true)

    const formData = new FormData(event.target)
    try {
      let response = await fetch("/api/collections", {
        method: "POST",
        headers: addAuthHeader(),
        body: formData,
      })
      response = await response.json()
      alert(`Changes Saved!`)

      //Clear all inputs
      formRef.current.reset()
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              className={styles.inputTitle}
              required
            />
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <textarea
              type="text"
              name="genre"
              className={styles.inputBody}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              className={styles.inputBody}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            {loading ? "Submitting..." : "Upload"}
          </button>
        </ul>
      </div>
    </form>
  )
}

export default Customize
