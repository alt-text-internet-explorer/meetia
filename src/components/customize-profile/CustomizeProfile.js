"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import styles from "./CustomizeProfile.module.css"
import { addAuthHeader } from "@/utils/authFetch"

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

    async function customize() {
      try {
        let response = await fetch("/api/customize-profile", {
          method: "POST",
          headers: addAuthHeader(),
          body: formData,
        })
        const resp = await response.status
        if (resp != 200) {
          console.error("Error customizing", resp)
        }
      } catch (error) {
        // Handle error
        console.error("Error posting customization:", error)
      }
    }
    customize()

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
