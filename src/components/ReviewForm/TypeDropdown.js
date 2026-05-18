"use client"
import { useState } from "react"
import * as styles from "./ReviewForm.module.css"

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const mediaOptions = ["Movie", "Art", "TV Show", "Music"]
  const [selectedMedia, setSelectedMedia] = useState("Select Media Type")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (media) => {
    setSelectedMedia(media)
    setIsOpen(false)
    
  }

  return (
    <div>
      <button type="button" 
              onClick={toggleDropdown}>
        {selectedMedia}
      </button>
      <input  
        type = "hidden" 
        name = "type"
        value = {selectedMedia}/>

      {isOpen && (
        <ul>
          {mediaOptions.map((media, index) => (
            <a 
              key={index} 
              href="#" 
              onClick={() => handleSelect(media)}>
              {media}
            </a>
          ))}
        </ul>
      )}
    </div>
  )
}
