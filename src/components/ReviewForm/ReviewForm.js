import React from "react"
import styles from "./ReviewForm.module.css"
import TypeDropdown from "./TypeDropdown"
import RatingDropdown from "./RatingDropdown"

function Form(props) {
  return (
    <form>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <label htmlFor="type">Media Type </label>
          <TypeDropdown />

          <label htmlFor="title">Media Title </label>
          <input
            type="text"
            name="Title"
            id="Title"
            className={styles.inputTitle}
            //value={review.Title}
            //onChange={handleChange}
          />

          <label htmlFor="author">Author </label>
          <input
            type="text"
            name="Author"
            id="Author"
            className={styles.inputTitle}
            //value={review.Title}
            //onChange={handleChange}
          />

          <label htmlFor="type">Rating </label>
          <RatingDropdown />

          <label htmlFor="body">Review Body </label>
          <textarea
            type="text"
            name="Body"
            id="Body"
            className={styles.inputBody}
            //value={review.Body}
            //onChange={handleChange}
          />

          <input
            type="button"
            value="Submit Review"
            className={styles.button}
          />
        </ul>
      </div>
    </form>
  )
}

export default Form
