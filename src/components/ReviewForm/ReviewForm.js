"use client"
import React, { useRef, useState } from "react"
import styles from "./ReviewForm.module.css"
import TypeDropdown from "./TypeDropdown"
import RatingDropdown from "./RatingDropdown"
import CoverUpload from "./CoverImage"
import { addAuthHeader } from "@/utils/authFetch"
import { useAuth } from "@/utils/authContext"

function Form(props) {
  const formRef = useRef(null)
  const { logout } = useAuth()
  const [loading, setLoading] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (loading) return
    setLoading(true)

    const formData = new FormData(event.target)

    try {
      const response = await fetch("/api/submitform", {
        method: "POST",
        headers: addAuthHeader(),
        body: formData,
      })
      if (response.status === 401) {
        logout("/login")
        return
      }

      if (!response.ok) {
        throw new Error("Failed to submit review")
      }

      alert(`Review Submitted!`)
      formRef.current.reset() //Clear all inputs
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
          <label htmlFor="type">Media Type </label>
          <TypeDropdown />

          <label htmlFor="cover">Cover Photo </label>
          <CoverUpload />

          <label htmlFor="title">Media Title </label>
          <input
            type="text"
            name="title"
            className={styles.inputTitle}
            placeholder="Enter title"
            required
          />

          <label htmlFor="author">Author </label>
          <input
            type="text"
            name="author"
            className={styles.inputTitle}
            placeholder="Enter author"
            required
          />

          <label htmlFor="type">Rating </label>
          <RatingDropdown />

          <label htmlFor="rbody">Review Body </label>
          <textarea
            type="text"
            name="rbody"
            className={styles.inputBody}
            placeholder="Enter review"
            required
          />

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </ul>
      </div>
    </form>
  )
}

export default Form
