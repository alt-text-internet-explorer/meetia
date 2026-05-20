"use client"
import React from "react"

export default function Dropdown({ label, options, value }) {
  return (
    <div>
      <label>{label}</label>
      <ul
        value={value}
        //onChange = {(e) => onChange(e.target.value)}
      >
        <a value="">-- Select an option --</a>
        {options.map((opt) => (
          <a key={options.value} value={opt.value}>
            {opt.label}
          </a>
        ))}
      </ul>
    </div>
  )
}
