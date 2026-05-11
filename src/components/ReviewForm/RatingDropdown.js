"use client"
import { useState } from "react"
import * as styles from "./ReviewForm.module.css"

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const mediaOptions = [1, 2, 3, 4, 5]
  const [selectedRating, setSelectedRating] = useState("Select Rating")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (rating) => {
    setSelectedRating(rating)
    setIsOpen(false)
  }

  return (
    <div>
      <button type="button" onClick={toggleDropdown}>
        {selectedRating}
      </button>

      {isOpen && (
        <ul>
          {mediaOptions.map((rating, index) => (
            <a key={index} href="#" onClick={() => handleSelect(rating)}>
              {rating}
            </a>
          ))}
        </ul>
      )}
    </div>
  )
}
