"use client"
import { useState } from "react"
import * as styles from "./ReviewForm.module.css"

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const mediaOptions = [
    "Article",
    "Book",
    "Movie",
    "Music",
    "Podcast",
    "TV Show",
  ]
  const [selectedMedia, setSelectedMedia] = useState("Select Media Type")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (media) => {
    setSelectedMedia(media)
    setIsOpen(false)
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={toggleDropdown}
      >
        {selectedMedia}
      </button>

      {isOpen && (
        <ul>
          {mediaOptions.map((media, index) => (
            <a
              className="dropdown-item"
              key={index}
              href="#"
              onClick={() => handleSelect(media)}
            >
              {media}
            </a>
          ))}
        </ul>
      )}
    </div>
  )
}
