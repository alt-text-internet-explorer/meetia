"use client"
import React, { useRef } from "react"
import styles from "./ReviewForm.module.css"
import TypeDropdown from "./TypeDropdown"
import RatingDropdown from "./RatingDropdown"
import CoverUpload from "./CoverImage"

function Form(props) {
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
      alert(`Review Submitted!`)
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

          <button type="submit" className={styles.button}>
            Submit Review{" "}
          </button>
        </ul>
      </div>
    </form>
  )
}

export default Form
