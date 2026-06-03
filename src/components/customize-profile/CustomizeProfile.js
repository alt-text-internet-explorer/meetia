"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { useState } from "react"
import styles from "./CustomizeProfile.module.css"
import { updateUserById } from "@/database/dbServices"

function Customize(props) {
  const formRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const fileInput = useRef(null)

  // displays image after it's been uploaded
  const handleImage = (event) => {
    const file = event.target.files?.[0]

    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  // delete image
  const handleDelete = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setPreview(null)

    if (fileInput.current) {
      fileInput.current.value = ""
    }
  } 

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    //get current user
    current_user_id = 1234
    
    await updateUserById(current_user_id, "displayName", formData.get("display-name"))
    await updateUserById(current_user_id, "bio", formData.get("about-me"))    

    //Clear all inputs
    formRef.current.reset()
    setPreview(null)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <ul className={styles.formcont}>
          <div>
            <label htmlFor="image-upload">Profile Picture</label>
            <br />
            {preview && (
              <>
                <Image
                  src={preview}
                  alt="profile picture"
                  width={120}
                  height={120}
                />
                <br />
                <button
                  type="button"
                  onClick={handleDelete}
                  className={styles.deleteButton}
                >
                  Remove Photo
                </button>
              </>
            )}
            {!preview && (
              <input
                ref={fileInput}
                id="image-upload"
                type="file"
                name="image-upload"
                accept="image/*"
                onChange={handleImage}
              />
            )}
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
