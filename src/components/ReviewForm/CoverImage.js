"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { useState } from "react"
import styles from "./ReviewForm.module.css"

export default function CoverImage(props) {
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

  return (
    <div>
      {preview && (
        <>
          <Image src={preview} alt="profile picture" width={120} height={120} />
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
          name="cover"
          accept="image/*"
          onChange={handleImage}
        />
      )}
    </div>
  )
}
