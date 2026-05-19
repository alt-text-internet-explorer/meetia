'use client'
import React from "react"
import styles from "./ReviewForm.module.css"
import TypeDropdown from "./TypeDropdown"
import RatingDropdown from "./RatingDropdown"

function Form(props) {

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target); 

    try {
      let response = await fetch('/api/submitform', {
        method: 'POST',
        body: formData,
      });
      response = await response.json()
      alert(`${response.type} ${response.title} ${response.author} ${response.rating} ${response.body}`)
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <label htmlFor="type">Media Type </label>
          <TypeDropdown 
          />

          <label htmlFor="title">Media Title </label>
          <input
            type="text"
            name="title"
            className={styles.inputTitle}
            placeholder="Enter title"
          />

          <label htmlFor="author">Author </label>
          <input
            type="text"
            name="author"
            className={styles.inputTitle}
            placeholder="Enter author"
          />

          <label htmlFor="type">Rating </label>
          <RatingDropdown />

          <label htmlFor="rbody">Review Body </label>
          <textarea
            type="text"
            name="rbody"
            className={styles.inputBody}
            placeholder="Enter review"
          />

          <button
            type="submit"
            className={styles.button}
          >Submit Review </button>
        </ul>
      </div>
    </form>
  )
}

export default Form
